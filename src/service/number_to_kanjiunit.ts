/**
 * 数値を漢数字の単位表記に変換する
 * 例：1234567890 → 12億3456万7890
 */

// 4桁ごとの単位
const UNITS = ['', '万', '億', '兆', '京', '垓', '秭', '穣'];

/**
 * 数値文字列を漢数字の単位表記に変換
 * @param numberStr 数値文字列
 * @returns 漢数字単位表記、変換失敗時はnull
 */
export default function convertToKanjiUnit(numberStr: string): string | null {
  try {
    // 数値として認識できるかチェック
    const num = parseFloat(numberStr);
    if (isNaN(num)) {
      return null;
    }

    // 負の数に対応
    const isNegative = num < 0;
    const absStr = Math.abs(num).toString();
    
    // 小数点で分割
    const [integerPart, decimalPart] = absStr.split('.');
    
    // 整数部分を4桁ごとに分割（右から）
    const groups: string[] = [];
    let str = integerPart;
    
    while (str.length > 0) {
      const start = Math.max(0, str.length - 4);
      groups.unshift(str.slice(start));
      str = str.slice(0, start);
    }
    
    // 各グループに単位をつける
    const parts: string[] = [];
    for (let i = 0; i < groups.length; i++) {
      const unitIndex = groups.length - 1 - i;
      const groupStr = groups[i];
      const value = parseInt(groupStr, 10);
      
      if (value > 0 && unitIndex < UNITS.length) {
        const unit = UNITS[unitIndex];
        parts.push(`${groupStr}${unit}`);
      }
    }
    
    // 結果の組み立て
    let result = parts.join('') || '0';
    
    // 小数点以下がある場合は追加
    if (decimalPart) {
      result += `.${decimalPart}`;
    }
    
    // 負の数の場合はマイナスをつける
    if (isNegative) {
      result = `-${result}`;
    }
    
    return result;
  } catch (e) {
    return null;
  }
}
