import { test, expect } from '@playwright/test'

test.describe('Annotations in Playwright', () => {

    test.skip('Test 1', async({ page }) => {

    await page.goto('https://www.yahoo.com/search');

    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Login | Salesforce');

    });

    test('Test 2', async({ page }) => {

    await page.goto('https://www.yahoo.com/search');

    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

    });

    test.only('Test 3', async({ page }) => {

    await page.goto('https://www.yahoo.com/search');

    await page.getByRole('combobox', { name: 'Search query' }).click();
    await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

    });

})

