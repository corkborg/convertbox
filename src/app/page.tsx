import Image from 'next/image'
import ConvertEPipeline from '@/components/pipeline/convert-e-pipeline'
import Link from 'next/link'
import MainTemplate from '@/components/main-template'

export default function Home() {
  return (
    <MainTemplate title="変換ツール一覧">
      <Link href="convert-exponential-notation">convert-exponential-notation</Link>
      <Link href="viewer-sqlite">viewer-sqlite</Link>
      <Link href="beautify-json">beautify-json</Link>
    </MainTemplate>
  )
}
