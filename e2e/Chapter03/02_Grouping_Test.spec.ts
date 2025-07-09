import { test, expect } from '@playwright/test'

test.describe('Grouping in Playwright', () => {

    test.describe('smoke testing', () => {
         
        test.skip('Test 1', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Login | Salesforce');

        });

    })

    test.describe('regression testing', () => {

        test('Test 2', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

        });

        test('Test 3', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

        });

    })

})