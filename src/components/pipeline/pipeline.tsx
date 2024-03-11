import { ReactNode } from "react"
import styles from './pipeline.module.css'


type Props = {
  children: ReactNode,
}
export default function Pipeline({children}: Props) {
  return <div className={styles.pipeline}>{children}</div>
}