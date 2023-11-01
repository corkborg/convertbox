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
          このWebサイトは便利な変換系ツールを収録したものです。<br/>
          JavaScriptを活用することですべての変換処理をブラウザ側で行っています。<br/>
          そのため、当サイトでは入力データになにが入力されたか知る手段がなく安全です。<br/>
        </p>
        <p>
          また、現代の広告や詳細なアクセス解析では間接的にページ内行動が第三者の会社に渡る可能性がありますが。<br/>
          このサイトでは広告が存在しないのと、アクセス解析もページにアクセスされたかどうか程度しか知ることができないCloudFront Web Analyticsで分析しています。<br/>
          このツールではIPアドレスなどを始めとしてユーザ特定につながる情報を取得することがでなく利用者に対して安全です。
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