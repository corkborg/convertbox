import MainTemplate from "@/components/main-template";
import BeautifyJSONPipeline from "@/components/pipeline/beautify-json-pipeline";

export const metadata = {
  title: 'JSONを綺麗にするツール',
};

export default function BautifyJSON() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      JSONを綺麗に(beautify)します。
    </div>
    <BeautifyJSONPipeline></BeautifyJSONPipeline>
  </MainTemplate>
  );
}