import { test, expect } from '@playwright/test';

test('Browser Contect in Playwright', { tag: ['@BrowserContext'] }, async({ page, browser }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        await expect(page.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');

        // Create a new browser session
        // This is a new browser context, not a new page
        // It is like a new incognito window in the browser
        // Each context has its own cookies, local storage, and session storage
        // This is useful for testing scenarios where you want to isolate the state of the browser
        // For example, you can test login scenarios in one context and then test logout scenarios in another context
        // This allows you to test multiple scenarios in parallel without interference
        // You can also use this to test different user roles or permissions in the same test suite
        const context2 = await browser.newContext();
        const page2 = await context2.newPage();

             await page2.goto('https://www.yahoo.com/search');

             await page2.getByRole('combobox', { name: 'Search query' }).click();
             await page2.getByRole('combobox', { name: 'Search query' }).fill('Salesforce');
             await page2.getByRole('button', { name: 'Search', exact: true }).click();

             await expect(page2.getByRole('link', { name: 'Salesforce login.salesforce.com Login | Salesforce' })).toHaveText('Salesforcelogin.salesforce.comLogin | Salesforce');
    

})