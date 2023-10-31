"use client"

import {useState} from 'react';
import Box from '@/components/organisms/box';
import convert from '@/service/convert_exponential'
import styles from './convert-e-pipeline.module.css'
import { MultilineInput } from '../atoms/input';
import { MultilineView } from '../molecules/view';

export default function Pipeline() {
  const [pipe1, setPipe1]= useState<string[]>([]);

  const output1 = pipe1.map(value => {
    const trimedValue = value.trim()
    if(trimedValue == '') return [''];
    const converted = convert(trimedValue);
    if(converted != null) {
      return [converted];
    } else {
      return ['error'];
    }
  })

  return (
    <div className={styles.pipeline}>
      <Box title="入力">
        <div>指数表記の数値を入力してください。複数行入力することもできます</div>
        <div>
          <MultilineInput onChange={setPipe1} />
        </div>
      </Box>
      <Box title="変換結果">
        <MultilineView dlprefix='download' records={output1}></MultilineView>
      </Box>
    </div>
  )
}