import MainTemplate from "@/components/main-template";
import JSONtoYAMLPipeline from "@/components/pipeline/json-to-yaml-pipeline";

export const metadata = {
  title: 'JSONからYAMLに変換するツール',
  description: 'YAMLで書かれた文字列をJSON文字列に変換するツールです。'
};

export default function JSONtoYAML() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      {metadata.description}
    </div>
    <JSONtoYAMLPipeline></JSONtoYAMLPipeline>
  </MainTemplate>
  );
}