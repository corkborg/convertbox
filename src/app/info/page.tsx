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
          このWebサイトは開発などで役立つ変換ツールを提供する目的で作っています。
        </p>
        <h2>セキュリティについて</h2>
        <p>
          多くの変換サイトでは入力データをサーバー上で処理しています。<br/>
          この際、サーバーに細工を施せば利用者に気づかれずに入力データを収集することが可能です。<br/>
          そのため、そのようなサイトでは運営者を信頼できない場合、重要なデータを入力しないほうがよいです。
        </p>
        <p>
          このサイトでは変換処理をサーバーではなく利用者のブラウザ、つまりPC内で完結させています。<br/>
          そのため、入力データがサーバーに送信されることがないため、サイト管理者であっても情報を収集することはできません。<br/>
        </p>
        <p>
          そして、WebページはCloudflareを通じて配信しています。<br/>
          Cloudflareはプライバシーに配慮しており、アクセスユーザーの詳細情報を取得する方法が存在しないため、運営者はアクセスユーザーの詳細を把握できません。
        </p>
        <p>
          一般的なWebサイトには広告が設置されていることがあります。<br/>
          広告技術ではユーザの行動を把握するために様々な情報をブラウザ上から収集しています。<br/>
          ときには収集しすぎている場合もありプライバシーに関係するデータを収集している場合があります。<br/>
          私は広告技術系の会社に長年努めていたことがありますが少し問題を感じていました。<br/>
          <br/>
          このWebサイトでは広告を掲載していないため、それらのリスクは存在しません。<br/>
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
