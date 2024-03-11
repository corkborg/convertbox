import MainTemplate from "@/components/main-template";
import JSONtoYAMLPipeline from "@/components/pipeline/json-to-yaml-pipeline";
import SQLiteViewerPipeline from "@/components/pipeline/sqlite-viewer-pipeline";
import YAMLtoJSONPipeline from "@/components/pipeline/yaml-to-json-pipeline";

export const metadata = {
  title: 'YAMLからJSONに変換するツール',
};

export default function YAMLtoJSON() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      YAMLからJSONに変換するツール
    </div>
    <YAMLtoJSONPipeline></YAMLtoJSONPipeline>
  </MainTemplate>
  );
}