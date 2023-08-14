import validateCardNumber from '../validator';

test('shoud return false', () => {
  const res = validateCardNumber('4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  4'); // eslint-disable-line no-tabs
  expect(res).toBe(false);
});

test('shoud return true', () => {
  const res = validateCardNumber('4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7'); // eslint-disable-line no-tabs
  expect(res).toBe(true);
});

test('shoud return true', () => {
  const res = validateCardNumber('4	5	5	6	7	3	7	5	8	6	8	9	9	8	5	5'); // eslint-disable-line no-tabs
  expect(res).toBe(true);
});
