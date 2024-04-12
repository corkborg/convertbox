"use client"
import { useState } from "react";
import InputSingle from "../atoms/inputSingle";
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import useStateRev from "@/utils/useStateRevision";
import { MultilineInput } from "../atoms/inputMulti";
import Radiomenu, {RadiomenuEntity} from "../molecules/radiomenu";
import { TableView } from "../molecules/tableview";

type EncodeMode = "unicode" | "all" | "withoutalphabet";
const encodeModemenu: RadiomenuEntity[] = [
  {"id": "unicode", "name": "URLに使用可能な文字列以外を変換", "value": "unicode", "type": "standard"},
  {"id": "withoutalphabet", "name": "アルファベット以外を変換", "value": "withoutalphabet", "type": "standard"},
  {"id": "all", "name": "すべてを変換", "value": "all", "type": "standard"},
];

type SpaceMode = "convert" | "plusencode" | "nothing";
const spaceModemenu: RadiomenuEntity[] = [
  {"id": "convert", "name": "スペースをエンコード", "value": "convert", "type": "standard"},
  {"id": "plusencode", "name": "+にエンコード", "value": "plusencode", "type": "standard"},
  {"id": "nothing", "name": "変換しない", "value": "nothing", "type": "standard"},
];

export default function EncodePercentEncodingPipeline() {

  const [inputs, setInputs, inputRevision] = useStateRev<string[]>([]);
  const [encodeMode, setEncodeMode] = useState<EncodeMode>("unicode");
  const [spaceMode, setSpaceMode] = useState<SpaceMode>("convert");

  const spaceConvert = () => {
    if(spaceMode == "convert") {
      return '%20';
    } else if(spaceMode == 'plusencode') {
      return '+';
    } else {
      return ' ';
    }
  }

  const utf8Encode = new TextEncoder();
  const utf8Decode = new TextDecoder();



  const convert = (char: number) => {
    if(char == 0x20) {
      return spaceConvert();
    }

    if(0x39 >= char && char >= 0x30 || 0x41 >= char && char >= 0x5a || 0x61 >= char && char >= 0x7a) {
      return utf8Decode.decode(Uint8Array.of(char));
    }

    if(char < 127) {
      return utf8Decode.decode(Uint8Array.of(char));
    }

    const s = char.toString(16).toUpperCase();
    return `%${s}`;

  }

  const records = inputs.map(input => {
    const byteArray = utf8Encode.encode(input);

    const bytes = Array.from(byteArray).map(convert);
    const percent_encoding = bytes.join('');
    return [percent_encoding]
  });

  return (
    <Pipeline>
      <Box title='文字列の読み込み'>
        <div>変換対象の文字列を入力してください</div>
        <MultilineInput onChange={setInputs}></MultilineInput>
      </Box>
      <Box title="フォーマット">
        <Radiomenu
          entities={encodeModemenu}
          onChange={(id, value) => setEncodeMode(value as EncodeMode)}></Radiomenu>
      </Box>
      <Box title="スペースの取り扱い">
        <Radiomenu
          entities={spaceModemenu}
          onChange={(id, value) => setSpaceMode(value as SpaceMode)}></Radiomenu>
      </Box>
      <Box title='パーセントエンコーディングの出力'>
        <TableView records={records} revision={inputRevision}></TableView>
      </Box>
    </Pipeline>
  );
}
