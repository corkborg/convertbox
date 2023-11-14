import MainTemplate from "@/components/main-template";
import JSONtoYAMLPipeline from "@/components/pipeline/json-to-yaml-pipeline";

export const metadata = {
  title: 'JSONからYAMLに変換するツール',
};

export default function JSONtoYAML() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      JSONからYAMLに変換するツール
    </div>
    <JSONtoYAMLPipeline></JSONtoYAMLPipeline>
  </MainTemplate>
  );
}