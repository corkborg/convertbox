import { useState } from 'react'
import styles from './radiomenu.module.css'
import {Key} from 'react'
import unraw from 'unraw'

type InputType = "standard" | "textbox"

export type RadiomenuEntity = {
  id: string
  name: string
  type: InputType,
  value?: string
}

type Props = {
  onChange: (id: Key, value?: string) => void
  entities: RadiomenuEntity[]
}

export default function Radiomenu({onChange, entities}: Props) {

  const [selected, setSelected] = useState(entities[0].id);
  const [textInputs, setTextInputs] = useState<{[id: string]: string | undefined}>({});
  const entitiesIndex = new Map(entities.map(x => [x.id, x]));

  const changHandler = (id: string) => {
    const entity = entitiesIndex.get(id) as RadiomenuEntity;

    if(entity?.type == "textbox") {
      setSelected(id);
      const value = textInputs[id];
      if(value != undefined) {
        onChange(id, value);
      }
    } else {
      setSelected(id);
      onChange(id, entity.value);
    }
  }

  const textChangHandler = (id: string, text: string) => {
    const fixedtext = text == '' ? undefined: text;
    const newinputs = {
      ...textInputs,
    }
    newinputs[id] = fixedtext
    setTextInputs(newinputs);
    changHandler(id);
  }

  const menuComponent = entities.map(record => {
    const label = <label>
      <input
        type="radio"
        checked={selected == record.id}
        onChange={() => changHandler(record.id)}/>
      {record.name}
    </label>;

    if(record.type == 'textbox') {
      return <div className={styles.menu} key={record.id}>
          {label}
          <span style={{marginLeft: '10px'}}>
            <input type="text" onChange={(e) => textChangHandler(record.id, e.target.value)}></input>
          </span>
      </div>;
    }
    return <div className={styles.menu} key={record.id}>
      {label}
    </div>
  })

  return <div className={styles.main}>
    {menuComponent}
  </div>
}
