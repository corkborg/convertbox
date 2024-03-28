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
          多くの変換サイトでは入力データをサーバで処理することが多いです。<br/>
          この際に密かに入力データを収集される可能性があります。<br/>
          そのため、このようなタイプのサイトでは信頼できない重要なデータを入力しないべきです。
        </p>
        <p>
          このサイトでは変換処理にはサーバを使わず利用者のブラウザ内のJavaScriptで完結して処理しているので<br/>
          入力データがサーバ側に送られることなく安全に取り扱うことができます。<br/>
        </p>
        <p>
          アクセス情報についてもこのサイトはプライバシーに配慮したCloudFlareでホスティングしているので<br/>
          仕組み上、運営者はアクセス情報を全く把握していないです。
        </p>
        <p>
          広告もWebページ本体と連携して動くものも多いので、データ流出やプライバシーに関わりますが<br/>
          このWebサイトではとくに掲載していないのでそのリスクが存在しません。
        </p>
        <h2>塩の惑星</h2>
        <p>
          このサイトの他に<a href="https://corkborg.github.io/">塩の惑星</a>というブログを運営しています。
        </p>

        <h2>ソースコード</h2>
        <p>
          ソースコードは下記で管理しています<br/>
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