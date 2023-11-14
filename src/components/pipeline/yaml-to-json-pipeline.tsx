"use client"
import { useState } from "react";
import InputSingle from "../atoms/inputSingle";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import yaml from 'yaml'
import IndentRadioMenu from "../molecules/indent-radiomenu";
import useStateRev from "@/utils/useStateRevision";

export default function YAMLtoJSONPipeline() {

  const [input, setInput] = useState("");

  const [indent, setIndent, indentRevision] = useStateRev<any>('  ');

  let output = ""
  if(input) {
    try {
      const obj = yaml.parse(input)
      output = JSON.stringify(obj, null, indent)
    } catch(e) {
      if (e instanceof SyntaxError) {
        output = e.message
      } else {
        output = 'UNKNOWN ERROR'
      }
    }
  }

  return (
    <Pipeline>
      <Box title='YAMLの読み込み'>
        <div>YAMLを貼り付けてください</div>
        <InputSingle onChange={setInput}></InputSingle>
      </Box>
      <Box title="フォーマット">
        <IndentRadioMenu
          onChangeIndent={(indent) => setIndent(indent)}></IndentRadioMenu>
      </Box>
      <Box title='JSONの出力'>
        <InputSingle height='250px' key={`${input}-${indentRevision}`} defaultValue={output} onChange={() => {}}></InputSingle>
      </Box>
    </Pipeline>
  );
}