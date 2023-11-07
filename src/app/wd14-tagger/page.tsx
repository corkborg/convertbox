import MainTemplate from "@/components/main-template";
import EncodeBase64Pipeline from "@/components/pipeline/encode-base64-pipeline";
import WD14TaggerPipeline from "@/components/pipeline/wd14-tagger-pipeline";

export const metadata = {
  title: 'モデル推論',
};

export default function EncodeBase64() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      推論
    </div>
    <WD14TaggerPipeline></WD14TaggerPipeline>
  </MainTemplate>
  )
}