import { ChangeEvent } from "react";

type Props = {
  onInputFile: (file: File) => {}
}

export default function InputFile({onInputFile}: Props) {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    onInputFile(file);
  }
  return <input type="file" onChange={changeHandler} />
}