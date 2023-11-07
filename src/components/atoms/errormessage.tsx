import { ReactNode } from "react"
import styles from './errormessage.module.css'

type Props = {
  children: ReactNode
}

export default function ErrorMessage({children}: Props) {  
  return (
    <div className={styles['error-message']}>
      {children}
    </div>
  );
}
