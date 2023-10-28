"use client"


import {useState} from 'react';
import Box from '@/components/box';
import Decimal from 'decimal.js'

export default function Pipeline() {
  const [pipe1, setPipe1]= useState({});
  return (
    <div>
      <Box title="インプット">
        <label htmlFor="input">数値:</label>
        <input type="text" name="input" size={10} />
      </Box>
      <Box title="アウトプット">
        <label htmlFor="input">数値:</label>
        <input type="text" name="input" size={10} />
      </Box>
    </div>
  )
}