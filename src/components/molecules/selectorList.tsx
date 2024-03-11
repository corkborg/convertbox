type Props = {
  revision: string,
  records: [key:string, value:string][],
  onClick: (key: string) => void
}

export default function SelectorList({revision, records, onClick}: Props) {

  const selector = records.map((record, i) => {
    const key = `${revision}-${i}`
    return <div 
      key={key}
      onClick={() => onClick(record[0])}>
        {record[1]}
    </div>
  })

  return selector
}