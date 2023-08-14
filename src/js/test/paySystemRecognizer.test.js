import paySystemRecognizer from '../paySystemRecognizer';

test('shoud return correct pay system', () => {
  const res = paySystemRecognizer('2202123456');
  expect(res).toBe('mir');
});

test.each([
  ['2202123456', 'mir'],
  ['412345678', 'visa'],
  ['51123456', 'mastercard'],
  ['34123456', 'americanexpress'],
  ['30112345', 'dinersclub'],
  ['21311234', 'jcb'],
  ['601112345', 'discover'],
])(('for number %s shoud return %s'), (number, system) => {
  const res = paySystemRecognizer(number);
  expect(res).toBe(system);
});
