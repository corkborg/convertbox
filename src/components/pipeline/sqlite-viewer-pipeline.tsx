"use client"
import { useMemo, useState } from "react";
import initSqlJs, { Database } from "sql.js"
import Box from "../organisms/box";
import UploadFile from "../molecules/upload-file";
import { TableView } from "../molecules/tableview";
import Pipeline from "./pipeline";
import { InputWait } from "../molecules/inputSingleWait";
import Infomation from "../atoms/infomation";
import useStateRev from "@/utils/useStateRevision";

async function createDatabase(file: File): Promise<Database> {
  const SQL = await initSqlJs({
    // TODO: いずれバンドルしたWASMで動かせるようにしたい
    locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
  })
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer);
  const database = new SQL.Database(buffer)
  return database;
}


export default function SQLiteViewerPipeline() {
  const [database, setDatabase, dbRevision] = useStateRev<Database | undefined>(undefined);
  const [databaseError, setDatabaseError] = useState<string | undefined>(undefined);

  // ファイルを受け取ってDBを初期化する
  const fileHandler = async (file: File) => {
    const db = await createDatabase(file)
    setDatabase(db)
    setDatabaseError(undefined)
  }

  const [listTables, setListTables] = useState<string[]>([])
  useMemo(() => {
    if(database == null) return []

    try {
      const res = database.exec("SELECT name FROM sqlite_master WHERE type='table'")
      const ress = res[0]
      const listTables = ress.values.map(value => value[0] as string)
      setListTables(listTables)
    } catch(e) {
      console.log(e)
      if(e instanceof Error) {
        setDatabaseError(e.message)
      }
      return [];
    }
  }, [database])

  const [query, setQuery, queryRevision]= useStateRev<string | undefined>(undefined)
  const [queryError, setQueryError]= useState<string | undefined>(undefined)

  const setSimpleQuery = (tableName: string) => {
    const query = `SELECT * FROM ${tableName} LIMIT 100`
    changeQuery(query)
  }

  const changeQuery = (query: string) => {
    setQuery(query)
  }

  const [records, setRecords] = useState<any[][]>([])
  const [heads, setHeads] = useState<string[]>([])

  useMemo(() => {
    if(database == null) return
    if(query == null) return

    try{
      const res = database.exec(query)
      const ress = res[0]
      setRecords(ress.values)
      setQueryError(undefined)
      setHeads(ress.columns)
    } catch(e) {
      console.error(e)
      if(e instanceof Error) {
        setQueryError(e.message)
      }
    }
  }, [query])

  const tableRecords = listTables.map(table => [table])
  const tableClickHandler = (i: number) => {
    setSimpleQuery(tableRecords[i][0])
  }

  return (
    <Pipeline>
      <Box title="SQLite3ファイルの読み込み">
        <div>SQLite3で作られたファイルを読み込みます</div>
        <UploadFile errorMessage={databaseError} uploadedFile={fileHandler}></UploadFile>
        <Infomation>※データ読込み時、sqliteのプログラムを取得すために一回sql.js.orgのサーバにアクセスします。</Infomation>
      </Box>
      <Box title="テーブル一覧">
        <div>テーブルを選択すると簡易クエリを発行します</div>
        <TableView
          dl={false}
          heads={["name"]}
          onClick={tableClickHandler}
          revision={dbRevision}
          records={tableRecords}></TableView>
      </Box>
      <Box title="クエリ">
        <InputWait errorMessage={queryError} revision={queryRevision} defaultValue={query} onChange={changeQuery}></InputWait>
      </Box>
      <Box title="レコード">
        <TableView revision={dbRevision} heads={heads} dlprefix='download' records={records}></TableView>
      </Box>
    </Pipeline>
  );
}