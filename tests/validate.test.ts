import { ValidationResult } from 'joi';
import testSubjects from './data';

const data = Object.values(testSubjects);

describe('Validation works as expected on correct values', () => {
  test.each(data)('Validation on $n document works properly', (subject) => {
    const target = subject.correct;
    const { value, error } = subject.validate(target) as ValidationResult;
    expect(error).toBe(undefined);
    expect(value).toEqual(target);
  });
});
