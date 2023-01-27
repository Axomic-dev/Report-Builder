import data from './data';

const testSubjects = Object.values(data);
describe('Validation works properly with correct values', () => {
  test.each(testSubjects)('Validation on message with $n documents works properly', (subject) => {
    const target = subject.correct;
    const { value, error } = subject.validate(target);
    expect(error).toBe(undefined);
    expect(value).toEqual(target);
  });
});
