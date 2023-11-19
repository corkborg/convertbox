import MainTemplate from "@/components/main-template";
import YAMLtoJSONPipeline from "@/components/pipeline/yaml-to-json-pipeline";

export const metadata = {
  title: 'YAMLからJSONに変換するツール',
  description: 'YAMLで書かれた文字列をJSON文字列に変換するツールです。\nJSON文字列のインデントなどを調整する機能があります。'
};

export default function YAMLtoJSON() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      YAMLで書かれた文字列をJSON文字列に変換するツールです。<br/>
      JSON文字列のインデントなどを調整する機能があります。
    </div>
    <YAMLtoJSONPipeline></YAMLtoJSONPipeline>
  </MainTemplate>
  );
}