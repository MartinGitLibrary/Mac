import { test, expect } from '@playwright/test'

test.describe('Parameterize in Playwright', () => {

    const searchKeywords = ['www.salesforce.com','Youtube','Apple']

    for (const key of searchKeywords) {

        test(`Test 3 ${key}`, async({ page }) => {

        await page.goto('https://www.yahoo.com/search');

        await page.getByRole('combobox', { name: 'Search query' }).click();
        await page.getByRole('combobox', { name: 'Search query' }).fill(key);
        await page.getByRole('button', { name: 'Search', exact: true }).click();

        // Assert that the search results contain the keyword
        await expect(page.locator('body')).toContainText(key);

        });
        
    }



})

