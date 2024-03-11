import MainTemplate from "@/components/main-template";
import DecodeBase64Pipeline from "@/components/pipeline/decode-base64-pipeline";

export const metadata = {
  title: 'Base64のエンコード',
};

export default function DecodeBase64() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      Base64へのエンコードを行います。
    </div>
    <DecodeBase64Pipeline></DecodeBase64Pipeline>
  </MainTemplate>
  )
}