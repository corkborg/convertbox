import styles from './table.module.css'

let key = Symbol("Key");

type Props = {
  revision: string,
  records: string[][],
  heads?: string[],
}
export default function Table({revision, records, heads}: Props) {
  const recordsDom = records.map((record, i) => {
    const recordKey = `${revision}-${i}`
    const recordDom = record.map(value => {
      const valueKey = `${recordKey}-${value}`
      return <td key={valueKey} className={styles.td}>{value}</td>
    })
    return <tr key={recordKey}>{recordDom}</tr>
  })
  const tbody = <tbody>{recordsDom}</tbody>
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>{tbody}</table>
    </div>
  );
}