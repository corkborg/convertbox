import MainTemplate from '@/components/main-template';
import Link from 'next/link'

export const metadata = {
  title: 'サイト詳細',
};

export default function InfoPage() {
  return (
    <MainTemplate title={metadata.title}>
      <div>
        <h2>サイトについて</h2>
        <p>
          このWebサイトは開発などで役立つ変換系のツールを提供する目的で作っています。
        </p>
        <h2>セキュリティについて</h2>
        <p>
          多くの変換サイトでは入力データをサーバで処理します。<br/>
          この際に利用者に気づかれずに密かに入力データを収集することが容易です。<br/>
          そのため、このようなタイプのサイトでは信頼できない場合には重要データを入力しないほうが良いです。
        </p>
        <p>
          このサイトでは変換処理にはサーバを使わず利用者ブラウザ内のJavaScriptで完結して処理しています。<br/>
          そのため、入力データをサーバ側に送る事がないのでサイト管理者であっても情報を収集することができません。<br/>
          そのため安全に利用することができます。
        </p>
        <p>
          このサイトはプライバシーに配慮したCloudFlareというサービスでホスティングしています。<br/>
          運営者が直接Webページを配信していない事、CloudFlareから詳細なアクセス情報を取り出す方法が存在しない事から、<br/>
          仕組み上、運営者はアクセス情報を把握することができずプライバシーに配慮されています。
        </p>
        <p>
          一般的なWebサイトでは広告がありますが、広告はWebページ本体と連携して動くものも多いので、入力データの流出やプライバシーに関わる場合があります。<br/>
          このWebサイトではとくに掲載していないのでそのリスクが存在しません。
        </p>

        <h2>塩の惑星</h2>
        <p>
          このサイトの他に<a href="https://corkborg.github.io/">塩の惑星</a>というブログを運営しています。
        </p>

        <h2>ソースコード</h2>
        <p>
          変換ロジックなどのソースコードは下記で管理しています<br/>
          <a href="https://github.com/corkborg/convertbox">https://github.com/corkborg/convertbox</a>
        </p>

        <h2>なにかあれば問合せまで</h2>
        <p>
          <Link href="/contact">問合せ</Link>
        </p>
      </div>
    </MainTemplate>
  );
}
