import Image from 'next/image'
import Pipeline from '@/components/pipeline/convert-e-pipeline'
import Link from 'next/link'
import MainTemplate from '@/components/main-template'

export default function Home() {
  return (
    <MainTemplate title="変換ツール一覧">
      <Link href="convert-exponential-notation">リンク</Link>
    </MainTemplate>
  )
}
