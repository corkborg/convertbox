import MainTemplate from "@/components/main-template";
import SQLiteViewerPipeline from "@/components/pipeline/sqlite-viewer-pipeline";

export const metadata = {
  title: 'SQLiteファイルのブラウザビュワーツール',
  description: 'SQLite3のファイルをブラウザ上で閲覧するツールです。\nブラウザ上でクエリを打つことができます。',
};

export default function SQLiteViewer() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      SQLite3のファイルをブラウザ上で閲覧するツールです。
      クエリを打つことができます。
    </div>
    <SQLiteViewerPipeline></SQLiteViewerPipeline>
    <div>
      <h2 style={{
        margin: '10px 0',
      }}>技術詳細</h2>
      <p>
        WebAssembly版のSQLiteを使用しています。<br/>
        そのため、SQLiteのクエリを打つことができます。
      </p>
    </div>
  </MainTemplate>
  );
}