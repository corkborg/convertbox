import Image from 'next/image'
import Pipeline from '@/components/pipeline'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>変換ツール一覧</h1>
      <Link href="convert-exponential-notation">リンク</Link>
    </>
  )
}
