
export const metadata = {
  title: 'サイト詳細',
};

export default function InfoPage() {
  return (
  <>
      <h1>{metadata.title}</h1>
      <div>
        <p>
          いつもはブログを書いています。<br/>
          <a href="https://corkborg.github.io/">https://corkborg.github.io/</a>
        </p>
      </div>
  </>
  );
}