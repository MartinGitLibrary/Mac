import { test, expect } from '@playwright/test';

test('Title: Soft Assertions using Playwright', async({ page }) => {

    await console.log('Testing Started to check Playwright watch mode, and this can be done in [Project level, Spec file level and test level]');

    await page.goto('https://www.youtube.com/');

    // Visible, Enabled, Editable, Empty

    await expect(page.getByPlaceholder('Search', { exact : true }).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search', { exact : true }).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search', { exact : true }).first()).toBeEnabled();
     //await page.getByPlaceholder('Search', { exact : true }).first().fill('Martin')
    await expect(page.getByPlaceholder('Search', { exact : true }).first()).toBeEmpty();

    // Verify URL, title, text, count

    await page.getByPlaceholder('Search', { exact : true }).first().click();
    await page.getByPlaceholder('Search', { exact : true }).first().fill('Playwright by testers talk');
    await page.getByPlaceholder('Search', { exact : true }).first().press('Enter');
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+testers+talk');

    await expect.soft(page).toHaveTitle('laywright by testers talk - YouTube')

    await expect(page.locator('span[id="title"]').first()).toHaveText('People also watched');

    await expect.soft(page.locator('span[id="title"]')).toHaveCount(2);

    //await expect(page.locator('span[id="title"]')).toBeDisabled();
    

})