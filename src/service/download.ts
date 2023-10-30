/**
 * ダウンロード関連のコード
 */

const fetchUnixtime = () => {
  const date = new Date();
  const millsUnixtime = date.getTime();
  return Math.floor( millsUnixtime / 1000 ) ;
}

export default async function download(prefix: string, text: string, ext: string) {
  const blob = new Blob([text], {type: 'text/plain'})
  const link = document.createElement('a')
  const unixtime = fetchUnixtime()
  link.download = `${prefix}-${unixtime}.${ext}`
  link.href = URL.createObjectURL(blob)
  link.click()
  URL.revokeObjectURL(link.href)
}