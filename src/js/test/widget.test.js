/**
 * @jest-environment jsdom
 */

import CardWidget from '../widget';

test('widget render', () => {
  const container = document.createElement('div');
  container.className = 'widget-container';
  document.body.appendChild(container);

  const widget = new CardWidget(container);
  widget.bindToDom();

  expect(CardWidget.markup).toEqual(container.innerHTML);
});

const cases = [
  ['4	5	5	6	7	3	7	5	8	6	8	9	9	8	5	5', 'green'], // eslint-disable-line no-tabs
  ['4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  4', 'red'], // eslint-disable-line no-tabs
  ['4929281141482303', 'red'],
  ['6011203928667363', 'red'],
  ['30535632244298', 'red'],
  ['4026987863684353', 'red'],
  ['4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7', 'green'], // eslint-disable-line no-tabs
];

test.each(cases)('for number %s should add class %s to input', (number, className) => {
  const container = document.createElement('div');
  container.className = 'widget-container';
  document.body.appendChild(container);

  const widget = new CardWidget(container);
  widget.bindToDom();

  widget.input.value = number;
  widget.submit.click();

  expect(widget.input.classList.contains(className)).toBe(true);
});
