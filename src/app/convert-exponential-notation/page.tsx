import Image from 'next/image'
import Pipeline from '@/components/pipeline/convert-e-pipeline'
import styles from './page.module.css'
import MainTemplate from '@/components/main-template';

export const metadata = {
  title: '指数表記を普通の数値表記に戻す変換',
};

export default function Home() {
  return (
    <MainTemplate title={metadata.title}>
      <div>
        指数表記、E表記（eという記号が入った数値）で書かれた文字列を普通の数値表記に戻します。（e.g 2e3→2000）<br/>
      </div>
      <Pipeline></Pipeline>
      <div>
        <h2 style={{
            margin: '10px 0',
          }}>技術仕様</h2>
        <p>
          通常の数値表記で340桁分まで変換できるようになっています。それ以上はうまく変換できません。<br/>
          E表記の指数表記のみ変換することができます。<br/>
        </p>
        <h2 style={{
          margin: '10px 0',
        }}>技術詳細</h2>
        <p>
          指数表記というのは、eを区切りに前半を仮数部、後半を指数部という書き方になっている数値の表記方法です（<a target="_blank" href="https://w.wiki/4$hL">指数表記 - Wikipedia</a>）<br/>
          多くの場合仮数部の数値✕10の指数部の数値乗した数値で元の数値に戻すことができます。（指数部の役割は1に0を増やしている雰囲気 e.g 10の3乗=1000）<br/>
          例えば、123e4は123✕10000で1230000です。
        </p>
        <p>
          元の数値を10を指数分した数値乗した数で割ってやると必要な桁数が少なくて済むことから、大きな数値を取り扱う科学的な計算や情報を節約する必要があるコンピュータの内部などで使用されています。<br/>
          多くのプログラミング言語では大きい数値を文字列に変換する際にこのような表記にしてくれる場合があります。特に科学計算で使われるようになったPythonなどではよく見かけるのではないかと思います。
        </p>
        <p>
          今回のプログラムでは<a href="https://github.com/MikeMcl/decimal.js">decimal.js</a>というライブラリを使い数値を認識した後にtoPrecisionというメソッドを使って文字列に変換しています。<br/>
          toPrecisionメソッドはJavaScriptのNumber型にも存在するので同様のアプローチはdecimal.jsがなくてもできると思います。（<a target="_blank" href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision">Number.prototype.toPrecision()</a>）
        </p>
        <p>
          逆に数値を指数表記に戻してやりたい場合はtoExponential()を使うことができます（<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential">Number.prototype.toExponential()</a>）
        </p>
      </div>
    </MainTemplate>
  )
}
