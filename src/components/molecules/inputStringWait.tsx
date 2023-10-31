import { useState } from "react"

type Props = {
  revision: string,
  onChange: (value: string) => void,
  defaultValue?: string,
}

export function InputWait({revision, onChange, defaultValue}: Props) {
  const [value, setValue] = useState(defaultValue)
  return (
  <>
    <div><textarea 
      key={revision}
      defaultValue={defaultValue}
      style={{
        width: '100%',
        margin: '10px 0',
        padding: '10px',
      }} onChange={e => setValue(e.target.value)} />
    </div>
    <div>
      <button 
        onClick={e => {if(value) onChange(value)}}
        type="button">実行</button>
    </div>
  </>)
}