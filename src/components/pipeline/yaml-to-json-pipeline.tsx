"use client"
import { useState } from "react";
import InputSingle from "../atoms/inputSingle";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import yaml from 'yaml'

export default function YAMLtoJSONPipeline() {

  const [input, setInput] = useState("");

  let output = ""
  if(input) {
    try {
      const obj = yaml.parse(input)
      output = JSON.stringify(obj)
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
      <Box title='JSONの出力'>
        <InputSingle height='250px' key={input} defaultValue={output} onChange={() => {}}></InputSingle>
      </Box>
    </Pipeline>
  );
}