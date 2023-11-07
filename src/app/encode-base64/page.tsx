import MainTemplate from "@/components/main-template";
import EncodeBase64Pipeline from "@/components/pipeline/encode-base64-pipeline";

export const metadata = {
  title: 'Base64へのエンコードツール',
  description: '文字列をBase64にエンコードすることができるブラウザツールです',
};

export default function EncodeBase64() {
  return (
  <MainTemplate title={metadata.title}>
    <div>{metadata.description}</div>
    <EncodeBase64Pipeline></EncodeBase64Pipeline>
  </MainTemplate>
  )
}