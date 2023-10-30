import Table from '../atoms/table'
import styles from './view.module.css'
import { serializeCSV, serializeTSV } from '@/service/serialize_records'
import download from '@/service/download'

type Props = {
  records: string[][],
  heads?: string[],
  dlprefix: string,
}

export function MultilineView({records, dlprefix, heads}: Props) {

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
      <div className={styles['download-menu']}>
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
      </div>
      <Table records={records}></Table>
    </>
  );
}