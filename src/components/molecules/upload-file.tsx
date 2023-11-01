import { useState } from "react";
import DropFile from "../atoms/dropfile";
import InputFile from "../atoms/inputfile";
import styles from './upload-file.module.css'

type Props = {
  uploadedFile: (file: File) => void
}

export default function UploadFile({uploadedFile}: Props) {
  const [file, setFile] = useState<File | undefined>(undefined)

  const handleUploadedFile = (file: File) => {
    setFile(file)
    uploadedFile(file)
  }

  return (
    <div className={styles.main}>
      <div>
        <DropFile onDropFile={handleUploadedFile}></DropFile>
      </div>
      <div>
        <InputFile onInputFile={handleUploadedFile}></InputFile>
        {file && <span style={{margin: '8px'}}>{file.name}</span>}
      </div>

    </div>
  )
}