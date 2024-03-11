import MainTemplate from "@/components/main-template";
import EncodeBase64Pipeline from "@/components/pipeline/encode-base64-pipeline";

export const metadata = {
  title: 'Base64のエンコード',
};

export default function EncodeBase64() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      Base64へのエンコードを行います。
    </div>
    <EncodeBase64Pipeline></EncodeBase64Pipeline>
  </MainTemplate>
  )
}