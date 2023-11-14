"use client"
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import InputSingle from "../atoms/inputSingle";
import useStateRev from "@/utils/useStateRevision";
import IndentRadioMenu from "../molecules/indent-radiomenu";
import { useState } from "react";

export default function BeautifyJSONPipeline() {

  const [input, setInput] = useState('');

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
      <Box title='JSONの読み込み'>
        <div>JSONを貼り付けてください</div>
        <InputSingle onChange={setInput}></InputSingle>
      </Box>
      <Box title="フォーマット">
        <IndentRadioMenu
          onChangeIndent={(indent) => setIndent(indent)}></IndentRadioMenu>
      </Box>
      <Box title='整形済みJSON'>
        <InputSingle height="250px" defaultValue={output} onChange={() => {}}></InputSingle>
      </Box>
    </Pipeline>
  );
}