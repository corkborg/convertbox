"use client"
import {useState} from 'react';
import Box from '@/components/organisms/box';
import convertToKanjiUnit from '@/service/number_to_kanjiunit';
import { MultilineInput } from '../atoms/inputMulti';
import { TableView } from '../molecules/tableview';
import Pipeline from './pipeline';
import { createRevision } from '@/service/input-revision';

export default function NumberToKanjiUnitPipeline() {
  const [pipe1, setPipe1]= useState<string[]>([])
  // 入力データのバージョン
  const [revision, setRevision]= useState<string>(createRevision())

  const changeHandler = (records: string[]) => {
    setRevision(createRevision())
    setPipe1(records)
  }

  const output1 = pipe1.map(value => {
    const trimedValue = value.trim()
    if(trimedValue == '') return [''];
    const cleanedValue = trimedValue.replace(/,/g, '') // カンマを削除

    const converted = convertToKanjiUnit(cleanedValue);
    if(converted != null) {
      return [converted];
    } else {
      return ['error'];
    }
  })

  return (
    <Pipeline>
      <Box title='入力'>
        <div>数値を入力してください。</div>
        <div>
          <MultilineInput onChange={changeHandler} />
        </div>
      </Box>
      <Box title='変換結果'>
        <TableView revision={revision} dlprefix='download' records={output1}></TableView>
      </Box>
    </Pipeline>
  )
}
