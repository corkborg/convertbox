import Image from 'next/image'
import styles from './page.module.css'
import {ReactNode} from 'react'

type Props = {
  children: ReactNode,
  title: string,
}

export default function Box({children, title}: Props) {
  return (
    <div style={{
      padding: "20px",
    }}>
      <h3>{title}</h3>
      <div style={{
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 2,
        padding: "50px",
        minWidth: "300px",
      }}>
        <div>{children}</div>
      </div>
    </div>
  )
}