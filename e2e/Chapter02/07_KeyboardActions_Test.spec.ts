import { test, expect } from '@playwright/test';

test('Title: Keyboard Actions using playwright', async({page}) => {

    await page.goto('https://search.yahoo.com/');

    //await page.getByPlaceholder('Search the web').fill('salesforce');
    await page.getByPlaceholder('Search the web').first().click();
    
    // Enter action from Keyboard
    //await page.getByPlaceholder('Search the web', { exact: true }).press('Enter');

    await page.waitForTimeout(5000);

    // Selecting and deleting from keyboard
    //await page.keyboard.press('Meta+A');
    //await page.keyboard.press('Delete');

    // TAB and Enter
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

})