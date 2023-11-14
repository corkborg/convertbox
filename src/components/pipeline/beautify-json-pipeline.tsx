"use client"
import { useState } from "react";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import InputSingle from "../atoms/inputSingle";
import Radiomenu from "../molecules/radiomenu";
import useStateRev from "@/utils/useStateRevision";
import IndentRadioMenu from "../molecules/indent-radiomenu";

type Props = {
}

export default function BeautifyJSONPipeline({}: Props) {

  const [input, setInput, revision] = useStateRev("");

  const formatMenu = [
    {id: "twospace", name: "2スペース"},
    {id: "fourspace", name: "4スペース"},
    {id: "tab", name: "タブ"}
  ]
  const formatEntities: {[id:string]: string} = {
    "twospace": '  ',
    "fourspace": '    ',
    'tab': '\t'
  }

  const [indent, setIndent, indentRevision] = useStateRev<any>('  ');

  let output = ""
  if(input) {
    try {
      const obj = JSON.parse(input)
      output = JSON.stringify(obj, null , indent)
    } catch(e) {
      if (e instanceof SyntaxError) {
        output = e.message
      } else {
        output = "UNKNOWN ERROR"
      }
    }
  }

  return (
    <Pipeline>
      <Box title="JSONの読み込み">
        <div>JSONを貼り付けてください</div>
        <InputSingle onChange={setInput}></InputSingle>
      </Box>
      <Box title="フォーマット">
        <IndentRadioMenu
          onChangeIndent={(indent) => setIndent(indent)}></IndentRadioMenu>
      </Box>
      <Box title="整形済みJSON">
        <InputSingle height="250px" key={`${revision}-${indentRevision}`} defaultValue={output} onChange={() => {}}></InputSingle>
      </Box>
    </Pipeline>
  );
}