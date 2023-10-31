import { DragEvent } from "react";

type Props = {
  onDropFile: (file: File) => {}
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
      onDragOver={(event) => event.preventDefault()}
      onDrop={dropHandler}
      style={{width: '200px', 'height': '100px', backgroundColor: '#999'}}>
      dropzone
    </div>
  );
}