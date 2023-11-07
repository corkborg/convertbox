"use client"
import { useState } from "react";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import InputSingle from "../atoms/inputSingle";

type Props = {
}

export default function BeautifyJSONPipeline({}: Props) {

  const [input, setInput] = useState("");

  let output = ""
  if(input) {
    try {
      const obj = JSON.parse(input)
      output = JSON.stringify(obj, null , '  ')
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
      <Box title="整形済みJSON">
        <InputSingle height="250px" key={input} defaultValue={output} onChange={() => {}}></InputSingle>
      </Box>
    </Pipeline>
  );
}