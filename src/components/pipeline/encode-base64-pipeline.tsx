"use client"
import Box from "../organisms/box";
import Pipeline from "./pipeline";
import { MultilineInput } from "../atoms/inputMulti";
import { TableView } from "../molecules/tableview";
import { strToUTF8Arr, base64EncArr } from '@/utils/base64'
import useStateRev from "@/utils/useStateRevision";

type Props = {
}

export default function EncodeBase64Pipeline({}: Props) {

  const [inputs, setInputs, inputRevision] = useStateRev<string[]>([])

  const records = inputs.map(input => {
    return [base64EncArr(strToUTF8Arr(input))]
  })

  return (
    <Pipeline>
      <Box title="変換元文字列">
        <div>変換対象の文字列を入力してください</div>
        <MultilineInput onChange={setInputs}></MultilineInput>
      </Box>
      <Box title="Base64文字列">
        <TableView records={records} revision={inputRevision}></TableView>
      </Box>
    </Pipeline>
  );
}
