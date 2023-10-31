import Link from 'next/link'
import MainTemplate from '@/components/main-template'

export default function Home() {
  return (
    <MainTemplate title="変換ツール一覧">
      <Link href="convert-exponential-notation">convert-exponential-notation</Link>
      <Link href="viewer-sqlite">viewer-sqlite</Link>
      <Link href="beautify-json">beautify-json</Link>
      <Link href="encode-base64">encode-base64</Link>
      <Link href="decode-base64">decode-base64</Link>
    </MainTemplate>
  )
}
