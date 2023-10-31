import { ReactNode } from "react"
import styles from './main-template.module.css'

type Props = {
  children: ReactNode,
  title: string,
}

export default function MainTemplate({title, children}: Props) {
  return <>
    <h1>{title}</h1>
    <div className={styles.main}>{children}</div>
  </>;
}