

import { ChangeEvent, MouseEventHandler, ReactNode } from "react";
import styles from './button.module.css'

type Props = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Button({onClick, children}: Props) {
  return <button className={styles.button} type='button' onClick={onClick}>{children}</button>
}