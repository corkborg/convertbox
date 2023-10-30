import Decimal from 'decimal.js'

/**
 * 小数点の末尾が0の場合に除去する処理
 */
export function trimZeroEnd(str: string) {
  // バリデーション系
  if(str[str.length-1] !== '0') return str;
  if(str.indexOf('.') === -1) return str;

  const [integer, fraction] = str.split('.');
  let index = fraction.length;
  for(let i = fraction.length-1;i >= 0;i--) {
    if(fraction[i]!=='0') break;
    index = i;
  }

  if(index == 0) return integer;
  const convertedFraction = fraction.slice(0, index);
  return `${integer}.${convertedFraction}`;
}

/**
 * @param numberStr 文字列で表現された数値 
 * @returns 変換後の数値文字列. 変換に失敗した場合null
 */
export default function convert(numberStr: string): string | null {
  try {
    const d = new Decimal(numberStr);
    // 
    const r1 = d.toPrecision(340);
    return trimZeroEnd(r1);
  } catch {
    return null;
  }
}