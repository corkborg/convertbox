import { DragEvent } from "react";
import styles from './dropfile.module.css'
import InputFile from "./inputfile";

type Props = {
  onDropFile: (file: File) => void
}

export default function DropFile({onDropFile}: Props) {

  const dropHandler = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files !== null && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      onDropFile(file);
      e.dataTransfer.clearData();
    }
  }

  return (
    <div
      className={styles.dropzone}
      onDragOver={(event) => event.preventDefault()}
      onDrop={dropHandler}>
      <div>
        ファイルをドロップ
      </div>
    </div>
  );
}