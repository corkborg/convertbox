import { useState } from 'react'
import styles from './radiomenu.module.css'
import {Key} from 'react'

type Props = {
  onChange: (id: Key) => void
  records: {id: Key, name: string}[]
}

export default function Radiomenu({onChange, records}: Props) {

  const [selected, setSelected] = useState(records[0].id)

  const changHandler = (id: Key) => {
    setSelected(id)
    onChange(id)
  }

  const menuComponent = records.map(record => {
    return <div className={styles.menu} key={record.id}>
      <label>
        <input
          type="radio"
          checked={selected == record.id}
          onClick={() => changHandler(record.id)}/>
        {record.name}
      </label>
    </div>
  })

  return <div className={styles.main}>
    {menuComponent}
  </div>
}