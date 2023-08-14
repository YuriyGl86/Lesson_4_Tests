export default function validateCardNumber(number) {
  const clean = number.replace(/\s*/g, '');
  let sum = 0;
  const odd = (clean.length - 1) / 2 === 0;

  for (let i = 0; i < clean.length; i += 1) {
    let digit = Number(clean[i]);
    if ((i / 2 === 0) === odd) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  return sum % 10 === 0;
}
