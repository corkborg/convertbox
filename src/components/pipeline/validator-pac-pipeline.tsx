"use client"
import { useState } from "react";
import { createPacResolver } from 'pac-resolver';

import { MultilineInput } from "../atoms/inputMulti";
import InputSingle from "../atoms/inputSingle";
import { TableView } from "../molecules/tableview";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import { createRevision } from "@/service/input-revision";

export default function ValidatorPacPipeline() {

  const [pac, setPac] = useState<string | undefined>(undefined)
  // 入力データのバージョン
  const [pacRevision, setPacRevision]= useState<string>(createRevision())
  const [values, setValues] = useState<string[]>([])
  const [valuesRevision, setValuesRevision]= useState<string>(createRevision())
  const [records, setRecords] = useState<string[][]>([])

  const changePac = (pac: string) => {
    setPacRevision(createRevision());
    setPacRevision(pac)
  }

  const changeValues = (vs: string[]) => {
    setValuesRevision(createRevision());
    setValues(vs)
  }
  
  const tableKey = `${pacRevision}-${valuesRevision}`

  const resolve = async () => {
    if(pac && values) {
      const FindProxyForURL = createPacResolver(null, pac)
      const resolving = values.map(async value => {
        return await FindProxyForURL(value)
      })
      const resolved = await Promise.all(resolving);
      const rds = resolved.map(r => [r])
      setRecords(rds)
    }
  }



  return (
    <Pipeline>
      <Box title="Pacファイル">
        <div>SQLite3で作られたファイルを読み込みます</div>
        <InputSingle onChange={changePac}></InputSingle>
      </Box>
      <Box title="検証URL">
        <div>検証するURLを入力してください</div>
        <MultilineInput onChange={changeValues}></MultilineInput>
      </Box>
      <Box title="結果">
        <TableView revision={tableKey}  records={records}></TableView>
      </Box>
    </Pipeline>
  );
}