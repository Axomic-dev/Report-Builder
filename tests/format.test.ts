import { phoneFormat, clpFormat } from '../src/tools/format';

describe('Testing format functions on expected values', () => {
  test('Phone format work as intended', () => {
    const target = '934589774';
    const result = phoneFormat(target);
    expect(result).toBe('(+56) 9 3458 9774');
  });
  test('Money format to clp work as intended', () => {
    const target = 93458774;
    const result = clpFormat(target);
    expect(result).toBe('$93.458.774 CLP');
  });
  test('Empty money format to clp work as intended', () => {
    const target = 0;
    const result = clpFormat(target);
    expect(result).toBe('$0 CLP');
  });
});
