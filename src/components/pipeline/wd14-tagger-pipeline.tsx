"use client"
import { useState } from "react"
import Box from "../organisms/box"
import { TableView } from "../molecules/tableview"
import Pipeline from "./pipeline"
import Button from "../atoms/button"
import useStateRev from "@/utils/useStateRevision"
import { loadModelSession, predict } from "@/service/wd14-tagger"
import * as ort from 'onnxruntime-web'

export default function WD14TaggerPipeline() {
  const [session, setSession] = useState<ort.InferenceSession | undefined>(undefined)

  const modelLoadHandler = async () => {
    const s = await loadModelSession()
    setSession(s)
  }

  const [records, setRecords, rev] = useStateRev<any[][]>([])
  const predictHandler = async () => {
    if(session) {
      const finalresult = await predict(session)
      setRecords(finalresult.map(x => x))
    }
  }

  return (
    <Pipeline>
      <Box title="モデルのロード">
        <Button onClick={modelLoadHandler}>ロード</Button>
      </Box>
      <Box title="モデルの推論">
        <Button onClick={predictHandler}>推論</Button>
      </Box>
      <Box title="テーブル一覧">
        <div>テーブルを選択すると簡易クエリを発行します</div>
        <TableView
          revision={rev}
          records={records}></TableView>
      </Box>
    </Pipeline>
  );
}