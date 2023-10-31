"use client"
import { DragEvent, useState } from "react";
import { DragEventHandler, useEffect } from 'react';
import initSqlJs, {SqlJsStatic, Database} from "sql.js"
import Box from "../organisms/box";
import UploadFile from "../molecules/upload-file";
import { MultilineView } from "../molecules/view";

type Props = {
}

async function createDatabase(file: File): Promise<Database> {
  const SQL = await initSqlJs({
    // TODO: いずれバンドルしたWASMで動かせるようにしたい
    locateFile: (file) => `https://sql.js.org/dist/${file}`,
  })
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer);
  const database = new SQL.Database(buffer)
  return database;
}

export default function SQLiteViewerPipeline({}: Props) {
  const [SQL, setSQL] = useState<any[][]>([]);
  const [tables, setTables] = useState<any[][]>([]);
  const [database, setDatabase] = useState<Database | undefined>(undefined);

  const fileHandler = async (file: File) => {
    console.log("drop handler")
    const db = await createDatabase(file)
    const res = db.exec("select name from sqlite_master where type='table'")
    const ress = res[0]
    setTables(ress.values);
    setDatabase(db);
  }

  const query = () => {
    console.log("onclick handler")
    if(database == null) return

    //const res = database.exec("SELECT * FROM personal")
    const res = database.exec("select name from sqlite_master where type='table'")
    console.log(res)
  }

  return (
    <>
      <Box title="SQLite3ファイルの読み込み">
        <div>SQLite3で作られたファイルを読み込みます</div>
        <UploadFile uploadedFile={fileHandler}></UploadFile>
        <div>※データ読み時、sqliteのプログラムを取得すために一回sql.js.orgのサーバにアクセスします。</div>
      </Box>
      <Box title="テーブル一覧">
        <MultilineView dlprefix='download' records={tables}></MultilineView>
      </Box>
    </>
  );
}