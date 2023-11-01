import MainTemplate from '@/components/main-template';
import Link from 'next/link'

export const metadata = {
  title: 'サイト詳細',
};

export default function InfoPage() {
  return (
    <MainTemplate title={metadata.title}>
      <div>
        <p>
          このWebサイトは開発などで役立つ変換系のツールを提供する目的で作っています。
        </p>
        <p>
          変換処理にはサーバを使わず極力ブラウザ側のJavaScriptを活用するように頑張っているので<br/>
          入力データがサーバ側に送られることなく安全に取り扱うことができます。
        </p>

        <h2>ソースコード</h2>
        <p>
          ソースコードは下記で管理しています
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