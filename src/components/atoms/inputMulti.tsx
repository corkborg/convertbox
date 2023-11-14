import Infomation from "./infomation"
import styles from './inputmulti.module.css'

type Props = {
  onChange: (value: string[]) => void
}

export function MultilineInput({onChange}: Props) {
  return <div className={styles.container}>
    <Infomation>複数行入力対応</Infomation>
    <textarea className={styles.textarea} onChange={e => {
      const values = e.target.value.split('\n')
      onChange(values)
    }} />
  </div>
}