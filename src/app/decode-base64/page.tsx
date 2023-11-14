import MainTemplate from "@/components/main-template";
import DecodeBase64Pipeline from "@/components/pipeline/decode-base64-pipeline";

export const metadata = {
  title: 'Base64から元の文字列を取り出すツール',
  description: 'Base64でエンコードされた文字列を元の文章に戻すことができるブラウザツールです。',
};

export default function DecodeBase64() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      <p>{metadata.description}</p>
      <p>
        文字列ではなくバイト列をエンコードしたBase64文字列の場合エラーになることがあります。（(ERROR)という文字になります）
      </p>
    </div>
    <DecodeBase64Pipeline></DecodeBase64Pipeline>
  </MainTemplate>
  )
}