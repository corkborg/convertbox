import { useState } from "react"
import Button from "../atoms/button"
import styles from './inputSingleWait.module.css'
import ErrorMessage from "../atoms/errormessage"

type Props = {
  revision: string,
  onChange: (value: string) => void,
  defaultValue?: string,
  errorMessage?: string,
}

export function InputWait({errorMessage, revision, onChange, defaultValue}: Props) {
  const [value, setValue] = useState(defaultValue)
  return (
  <div className={styles.main}>
    <textarea
      key={revision}
      defaultValue={defaultValue}
      className={styles.textarea}
      onChange={e => setValue(e.target.value)} />
    <div>
      <Button
        onClick={e => {if(value) onChange(value)}}>実行</Button>
    </div>
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </div>)
}