"use client"
import { useState } from 'react'
import styles from './indent-radiomenu.module.css'
import unraw from 'unraw'
import Radiomenu, { RadiomenuEntity } from './radiomenu'

const formatMenu: RadiomenuEntity[] = [
  {id: "twospace", name: "2スペース", type: "standard", "value": "  "},
  {id: "fourspace", name: "4スペース", type: "standard", "value": "    "},
  {id: "tab", name: "タブ", type: "standard", "value": "\t"},
  {id: "other", name: "その他", type: "textbox"},
]
const formatEntities: {[id:string]: string} = {
  "twospace": '  ',
  "fourspace": '    ',
  'tab': '\t'
}

type Props = {
  onChangeIndent: (indent: string) => void
}

export default function IndentRadioMenu({onChangeIndent}: Props) {

  return <Radiomenu entities={formatMenu} onChange={(id, value) => onChangeIndent(value as string)}></Radiomenu>

    /*const [selected, setSelected] = useState(formatMenu[0].id)

    const normalChangeHandler = (id: string) => {
      setSelected(id)
      const i = formatEntities[id]
      onChangeIndent(i)
    }

    const otherChangHandler = (id: string) => {
      setSelected(id)
    }

    const otherChangIndentHandler = (indent: string) => {
      // エスケープシーケンス
      onChangeIndent(unraw(indent))
    }

    const menuComponent = formatMenu.map(record => {
      if(record.id == 'other') {
        return [
          <div style={{width: '100%'}} key="other-indent"></div>,
          <div className={styles.menu} key={record.id}>
          <label>
            <input
              type="radio"
              checked={selected == record.id}
              onChange={() => otherChangHandler(record.id)}/>
            {record.name}
          </label>
          <span style={{marginLeft: '10px'}}>
            <input type="text" onChange={(e) => otherChangIndentHandler(e.target.value)}></input>
          </span>
        </div>]
      }
      return <div className={styles.menu} key={record.id}>
        <label>
          <input
            type="radio"
            checked={selected == record.id}
            onChange={() => normalChangeHandler(record.id)}/>
          {record.name}
        </label>
      </div>
    })

    return <div className={styles.main}>
      {menuComponent}
    </div>*/
  }
