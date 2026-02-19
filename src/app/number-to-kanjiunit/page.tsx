import MainTemplate from "@/components/main-template";
import NumberToKanjiUnitPipeline from "@/components/pipeline/number-to-kanjiunit-pipeline";

export const metadata = {
  title: '数値を漢数字の単位表記に変換',
  description: '数値を漢数字の単位（万、億、兆など）を使った表記に変換するブラウザツールです',
};

export default function NumberToKanjiUnit() {
  return (
    <MainTemplate title={metadata.title}>
      <div>{metadata.description}</div>
      <NumberToKanjiUnitPipeline></NumberToKanjiUnitPipeline>
      <div>
        <h2 style={{
          margin: '10px 0',
        }}>仕様</h2>
        <p>
          数値を漢数字の単位（万、億、兆など）を使った表記に変換します。<br/>
          例：1234567890 → 12億3456万7890
        </p>
      </div>
    </MainTemplate>
  )
}
