import styles from './table.module.css'

type Props = {
  records: string[][],
  heads?: string[],
}
export default function Table({records, heads}: Props) {
  const recordsDom = records.map(record => {
    const recordDom = record.map(value => {
      return <td className={styles.td}>{value}</td>
    })
    return <tr>{recordDom}</tr>
  })
  const tbody = <tbody>{recordsDom}</tbody>
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>{[tbody]}</table>
    </div>
  );
}