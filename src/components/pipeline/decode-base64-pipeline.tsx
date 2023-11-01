"use client"
import { useState } from "react";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import InputSingle from "../atoms/inputSingle";
import { MultilineInput } from "../atoms/inputMulti";
import { TableView } from "../molecules/tableview";
import { UTF8ArrToStr, base64DecToArr } from '@/utils/base64'
import useStateRev from "@/utils/useStateRevision";

export default function DecodeBase64Pipeline() {

  const [inputs, setInputs, inputRevision] = useStateRev<string[]>([]) 

  const records = inputs.map(input => {
    return [UTF8ArrToStr(base64DecToArr(input))]
  })

  return (
    <Pipeline>
      <Box title="Base64文字列">
        <div>Base64文字列を入力してください</div>
        <MultilineInput onChange={setInputs}></MultilineInput>
      </Box>
      <Box title="整形済みJSON">
        <TableView records={records} revision={inputRevision}></TableView>
      </Box>
    </Pipeline>
  );
}