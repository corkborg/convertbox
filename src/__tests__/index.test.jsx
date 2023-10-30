import {expect, jest, test} from '@jest/globals';
import convert, { searchNumberEnd } from '@/service/convert_exponential'

describe('Home', () => {
  it('searchNumberEnd', () => {
    expect(searchNumberEnd('1111')).toBe('1111')
    expect(searchNumberEnd('1111.000')).toBe('1111')
    expect(searchNumberEnd('1111.00300')).toBe('1111.003')
    expect(searchNumberEnd('1111.003')).toBe('1111.003')
    expect(searchNumberEnd('1111.300')).toBe('1111.3')
  })
})