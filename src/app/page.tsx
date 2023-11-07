import Link from 'next/link'
import MainTemplate from '@/components/main-template'
import * as convert_exponential from '@/app/convert-exponential-notation/page'
import * as beautify_json from '@/app/beautify-json/page'
import * as sqllite_viewer from '@/app/viewer-sqlite/page'
import * as decode_base64 from '@/app/decode-base64/page'
import * as encode_base64 from '@/app/encode-base64/page'
import Box from '@/components/organisms/box'

type PageLinkProps = {
  url: string,
  pageData: {
    metadata: {
      title: string,
      description?: string,
    }
  }
}
function PageLink({url, pageData}: PageLinkProps) {
  return (
    <Box title={<Link href={url}>{pageData.metadata.title}</Link>}>
      {pageData.metadata.description && <p>{pageData.metadata.description}</p>}
    </Box>
  );
}

export default function Home() {


  return (
    <MainTemplate title="変換ツール一覧">
      <PageLink url="convert-exponential-notation" pageData={convert_exponential}></PageLink>
      <PageLink url="viewer-sqlite" pageData={sqllite_viewer}></PageLink>
      <PageLink url="beautify-json" pageData={beautify_json}></PageLink>
      <PageLink url="encode-base64" pageData={encode_base64}></PageLink>
      <PageLink url="decode-base64" pageData={decode_base64}></PageLink>
    </MainTemplate>
  )
}
