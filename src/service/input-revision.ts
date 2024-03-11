


function randomKey(): string {
  return Math.random().toString(32).substring(2)
}

export function createRevision(): string {
  return randomKey()
}