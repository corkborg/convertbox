import { ReactNode } from "react"
import styles from './infomation.module.css'

type Props = {
  children: ReactNode
}

export default function Infomation({children}: Props) {
  return <div className={styles.text}>{children}</div>
}