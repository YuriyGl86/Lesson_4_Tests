import puppeteer from 'puppeteer';

describe('pay system widget Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: "new",
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    // await page.waitForSelector('body');
    await page.waitForSelector('.card-widget');
  });

  test('Form input should add .green class if card number is valid', async () => {
    jest.setTimeout(40000);
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.card-widget');

    const form = await page.$('.widget-form');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('4	5	5	6	7	3	7	5	8	6	8	9	9	8	5	5'); // eslint-disable-line no-tabs
    await submit.click();

    await page.waitForSelector('.card-widget .input.green');
  }, 20000);

  afterEach(async () => {
    await browser.close();
  });
});
