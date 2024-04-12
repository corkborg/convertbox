import MainTemplate from "@/components/main-template";
import EncodePercentEncodingPipeline from "@/components/pipeline/percent-encoding-pipeline";

export const metadata = {
  title: 'パーセントエンコードに変換するツール',
  description: '',
};

export default function EncodeBase64() {
  return (
  <MainTemplate title={metadata.title}>
    <div>{metadata.description}</div>
    <EncodePercentEncodingPipeline></EncodePercentEncodingPipeline>
  </MainTemplate>
  )
}
