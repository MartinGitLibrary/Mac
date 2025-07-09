import { test, expect } from '@playwright/test'
import { TIMEOUT } from 'dns';

test.describe('Time [ Test level | Assertions | Action | All Execution Global ]', async() => {

    test('Global Timeouts in playwright', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(
            page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })
        ).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

        await page.waitForTimeout(60000);

    });

    test('Local test level Timeouts in playwright', async({ page }) => {

        test.setTimeout(1 * 60 * 1000); //this will not consider gobal level timeout

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(
            page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })
        ).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

        await page.waitForTimeout(60000);

    });

        test('Global ASSERTION Timeouts in playwright', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(
            page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })
        ).toHaveText('alesforcelogin.salesforce.comLogin | Salesforce');

        //await page.waitForTimeout(60000);

    });

    test('Local test level ASSERTION Timeouts in playwright', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(
            page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })
        ).toHaveText('alesforcelogin.salesforce.comLogin | Salesforce', { timeout: 5000 });  //this will not consider gobal level timeout

        //await page.waitForTimeout(60000);

    });

    test('Global ACTION Timeouts in playwright', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search_Dummy', exact: true }).click();

        await expect(
            page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })
        ).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

        await page.waitForTimeout(60000);

    });

    test('Local test level ACTION Timeouts in playwright', async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search_Dummy', exact: true }).click({timeout:5000}); ////this will not consider gobal level timeout

        await expect(
            page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })
        ).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

        await page.waitForTimeout(60000);

    });

})