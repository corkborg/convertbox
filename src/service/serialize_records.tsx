

export function serializeCSV(records: any[][]) {
  const recordsText = records.map(record => record.join(',')).join('\n')
  return recordsText
}

export function serializeTSV(records: any[][]) {
  const recordsText = records.map(record => record.join('\n')).join('\n')
  return recordsText
}