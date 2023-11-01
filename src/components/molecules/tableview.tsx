import Table from '../atoms/table'
import styles from './tableview.module.css'
import { serializeCSV, serializeTSV } from '@/service/serialize_records'
import download from '@/service/download'

type Props = {
  revision: string,
  records: any[][],
  heads?: string[],
  dlprefix?: string,
  dl?: boolean,
  onClick?: (index: number) => void // recordsのインデックス番号を返す
}

/**
 * RDBから取得したレコードなどを表示するのに特化したビュワー
 * @param param0 
 * @returns 
 */
export function TableView({onClick, revision, records, dl = true, dlprefix = 'download', heads}: Props) {

  const copyClipBoard = async () => {
    await navigator.clipboard.writeText(serializeCSV(records))
  }

  const downloadTSV = async () => {
    download(dlprefix, serializeTSV(records), 'tsv')
  }

  const downloadCSV = async () => {
    download(dlprefix, serializeCSV(records), 'csv')
  }

  return (
    <>
      {dl && <div className={styles['download-menu']}>
        <div
          className={styles['download-button']}
          onClick={copyClipBoard}
          >クリップボードにコピー</div>
        <div
          className={styles['download-button']}
          onClick={downloadTSV}
          >TSVでダウンロード</div>
        <div
          className={styles['download-button']}
          onClick={downloadCSV}
          >CSVでダウンロード</div>
        <div>その他</div>
      </div>}
      <Table onClick={onClick} heads={heads} revision={revision} records={records}></Table>
    </>
  );
}