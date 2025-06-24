import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bing.com/search?q=salesforce.com&form=QBLH&sp=-1&ghc=1&lq=0&pq=salesforce.com&sc=12-14&qs=n&sk=&cvid=72448D78C5E9446A8561975A1AA75A2A');
  
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Login', exact: true }).click(),
  ]);
  //await page.getByRole('link', { name: 'Login', exact: true }).click();
  
  await page2.waitForLoadState();
  await expect(page2).toHaveURL('https://login.salesforce.com/');
  await expect(page2.getByAltText('Salesforce')).toBeVisible();
  
});