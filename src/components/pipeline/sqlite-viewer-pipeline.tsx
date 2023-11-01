"use client"
import { useMemo, useState } from "react";
import initSqlJs, { Database } from "sql.js"
import Box from "../organisms/box";
import UploadFile from "../molecules/upload-file";
import { TableView } from "../molecules/tableview";
import Pipeline from "./pipeline";
import { createRevision } from "@/service/input-revision";
import { InputWait } from "../molecules/inputSingleWait";
import Infomation from "../atoms/infomation";

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
  const [database, setDatabase] = useState<Database | undefined>(undefined);
  const [dbRevision, setDbRevision]= useState<string>(createRevision())

  const fileHandler = async (file: File) => {
    const db = await createDatabase(file)

    setDbRevision(createRevision())
    setDatabase(db);
  }

  const listTables = (): string[] => {
    if(database == null) return []
    const res = database.exec("SELECT name FROM sqlite_master WHERE type='table'")
    const ress = res[0]
    return ress.values.map(value => value[0] as string)
  }

  const [query, setQuery]= useState<string | undefined>(undefined)
  const [queryRevision, setQueryRevision]= useState<string>(createRevision())

  const setSimpleQuery = (tableName: string) => {
    const query = `SELECT * FROM ${tableName} LIMIT 100`
    changeQuery(query)
  }

  const changeQuery = (query: string) => {
    setQueryRevision(createRevision())
    setQuery(query)
  }

  const [records, setRecords] = useState<any[][]>([])
  const [heads, setHeads] = useState<string[]>([])

  useMemo(() => {
    if(database == null) return
    if(query == null) return

    const res = database.exec(query)
    const ress = res[0]
    setRecords(ress.values)
    setHeads(ress.columns)
  }, [query])

  const tableRecords = listTables().map(table => [table])
  const tableClickHandler = (i: number) => {
    setSimpleQuery(tableRecords[i][0])
  }

  return (
    <Pipeline>
      <Box title="SQLite3ファイルの読み込み">
        <div>SQLite3で作られたファイルを読み込みます</div>
        <UploadFile uploadedFile={fileHandler}></UploadFile>
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
        <InputWait revision={queryRevision} defaultValue={query} onChange={changeQuery}></InputWait>
      </Box>
      <Box title="レコード">
        <TableView revision={dbRevision} heads={heads} dlprefix='download' records={records}></TableView>
      </Box>
    </Pipeline>
  );
}