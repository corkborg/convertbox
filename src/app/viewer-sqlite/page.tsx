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
      SQLite3のファイルの内容をブラウザ上で閲覧することができるツールです。<br/>
      ツール内にSQLiteを内蔵しているのでSQLite3のクエリを打つことができます。
    </div>
    <SQLiteViewerPipeline></SQLiteViewerPipeline>
    <div>
      <h2 style={{
          margin: '10px 0',
        }}>技術仕様</h2>
      <p>
        このブラウザツールでは、sqliteファイルを読み込むためにsql.jsというライブラリを使用しています。<br/>
        SQL.jsはSQLiteをWebAssembly向けにビルドしたプロジェクトでブラウザ上でSQLiteそのものを動かすことができます。<br/>
      </p>
      <p>
        <a href="https://github.com/sql-js/sql.js" target="_blank">sql.js</a>
      </p>
      <p>
        このライブラリを使用することでこのツールではSQLite互換のSQLクエリをブラウザ上で実行できるようなっています。
      </p>
      <h2 style={{
        margin: '10px 0',
      }}>技術詳細</h2>
      <p>
        SQLiteは軽量なSQLデータベースです。<br/>
        SQLiteではsqliteファイルというファイルの規格を持っていて、ファイル内にテーブルやレコード情報などの複雑なデータを一つのファイルに入れることができます。<br/>
        sqliteファイルは、軽量でコピーしやすいため取り回しがよく、対応しているプログラミング言語が多いことから、組み込みシステムや、クライアントシステムのローカルデータベースとして使用されることがよくあります。<br/>
      </p>
      <p>
        最近では、sqliteファイルをコピーして各サーバに配置すればシステムをスケールアウトしやすい性質からエッジコンピューティングの分野でも注目されています。
      </p>
      <p>
        <a href="https://www.sqlite.org/index.html" target="_blank">SQLite3</a>
      </p>
    </div>
  </MainTemplate>
  );
}