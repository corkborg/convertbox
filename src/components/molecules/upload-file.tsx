import DropFile from "../atoms/dropfile";
import InputFile from "../atoms/inputfile";

type Props = {
  uploadedFile: (file: File) => {}
}

export default function UploadFile({uploadedFile}: Props) {
  return (
    <>
      <div>
        <InputFile onInputFile={uploadedFile}></InputFile>
      </div>
      <div>
        <DropFile onDropFile={uploadedFile}></DropFile>
      </div>
    </>
  )
}