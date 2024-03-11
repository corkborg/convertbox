"use client"
import { useState } from "react";
import InputSingle from "../atoms/inputSingle";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import yaml from 'yaml'

export default function JSONtoYAMLPipeline() {

  const [input, setInput] = useState("");

  let output = ""
  if(input) {
    try {
      const obj = yaml.parse(input)
      output = yaml.stringify(obj)
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
        <div>
          JSONを貼り付けてください<br/>
          YAML混じりのJSONも読み込むことができます。
        </div>
        <InputSingle onChange={setInput}></InputSingle>
      </Box>
      <Box title="YAMLの出力">
        <InputSingle height="250px" key={input} defaultValue={output} onChange={() => {}}></InputSingle>
      </Box>
    </Pipeline>
  );
}