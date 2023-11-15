import { CSSProperties, ReactNode } from 'react';
import styles from './table.module.css'

type Props = {
  revision: string,
  records: string[][],
  heads?: string[],
  onClick?: (index: number) => void // recordsのインデックス番号を返す
}

export default function Table({onClick, revision, records, heads}: Props) {

  let theadDom: ReactNode[] = []
  if(heads) {
    const headsDom = heads.map((head, i) => {
      const key = `head-${revision}-${i}`
      return <th key={key} className={styles.th}>{head}</th>
    })
    theadDom = [<thead key={`head-${revision}`}>
      <tr>{headsDom}</tr>
    </thead>]
  }

  const recordsDom = records.map((record, i) => {
    const wrapOnClick = onClick ? () => onClick(i) : undefined
    const key = `record-${revision}-${i}`
    return <Record
      key={key}
      onClick={wrapOnClick}
      revision={revision}
      record={record}
      index={i} ></Record>
  })
  const tbody = <tbody>{recordsDom}</tbody>
  return (
    <div  className={styles.wrap}>
      <table key={`table-${revision}`} className={styles.table}>
        {theadDom}
        {tbody}
      </table>
    </div>
  );
}

type RecordProps = {
  revision: string
  record: any[]
  index: number
  onClick?: () => void // recordsのインデックス番号を返す
}

function Record({onClick, revision, record, index}: RecordProps) {
  const style: CSSProperties = onClick ? {cursor: 'pointer'}: {}

  const recordKey = `${revision}-${index}`
  const recordDom = record.map(value => {
    const valueKey = `${recordKey}-${value}`
    return <td onClick={onClick} style={style} key={valueKey} className={styles.td}>{value}</td>
  })
  return <tr key={recordKey}>{recordDom}</tr>
}