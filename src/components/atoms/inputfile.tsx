import { ChangeEvent } from "react";
import styles from './inputfile.module.css'

type Props = {
  onInputFile: (file: File) => void
}

export default function InputFile({onInputFile}: Props) {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    onInputFile(file);
  }
  return <label className={styles.label}>
    ファイルを選択
    <input className={styles.input} type="file" onChange={changeHandler} />
  </label>
}