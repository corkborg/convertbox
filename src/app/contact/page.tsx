import MainTemplate from "@/components/main-template";

export const metadata = {
  title: '問合せ',
  robots: {
    index: false,
  },
};

export default function InfoPage() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      <p>
        問合せ、質問、不具合、要望等の場合は下記の手段でお願いします。
      </p>
      <p>
        メールアドレス（メール転送サービスを利用しています）<br/>
        ax4squil8<span>&#64;</span>mozmail.com
      </p>
      <p>
        不具合や要望の場合はGithubの方に書いてもらうこともできます。<br/>
        <a target="_blank" href="https://github.com/corkborg/convert-tools">https://github.com/corkborg/convert-tools</a>
      </p>
    </div>
  </MainTemplate>
  );
}