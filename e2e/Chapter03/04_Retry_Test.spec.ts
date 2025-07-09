import { test, expect } from '@playwright/test'

test.describe('Retry in Playwright', () => {

    test('Test 3', { tag : ['@Retry_4_Time If the Test Failes'] }, async({ page }) => {

    await page.goto('https://www.yahoo.com/search');

    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Salesforcelogin.salesforce.comLogin | Martin');

    });

})

