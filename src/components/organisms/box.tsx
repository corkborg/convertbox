import Image from 'next/image'
import {ReactNode} from 'react'
import styles from './box.module.css'

type Props = {
  children: ReactNode,
  title: string | ReactNode,
}

export default function Box({children, title}: Props) {
  return (
    <div className={styles.box}>
      <h3 style={{
        margin: '10px 5px',
      }}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}