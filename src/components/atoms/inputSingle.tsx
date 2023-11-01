import { CSSProperties } from "react"

type Props = {
  onChange: (value: string) => void,
  defaultValue?: string,
  height?: string
}

export default function InputSingle({onChange, defaultValue, height}: Props) {
  const style: CSSProperties = {
    width: '100%',
    margin: '10px 0',
    padding: '10px',
  }
  style['height'] = height

  return <textarea 
    defaultValue={defaultValue}
      style={style} 
    onChange={e => onChange(e.target.value)} />
}