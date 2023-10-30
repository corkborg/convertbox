
type Props = {
  onChange: (value: string[]) => void
}

export function MultilineInput({onChange}: Props) {
  return <textarea style={{
    width: '100%',
    margin: '10px 0',
    padding: '10px',
  }} onChange={e => {
    const values = e.target.value.split('\n')
    onChange(values)
  }} />
}