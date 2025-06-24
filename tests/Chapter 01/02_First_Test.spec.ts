// Implort Playwright Module

import { test, expect } from '@playwright/test';

// import {} -> Objects from Playwright
// test -> Function to create a test
// expect -> Function to make assertions
// from '@playwright/test' -> Importing from Playwright's test module

// Write a test
test('Title: My First Playwright Script', async ({ page }) => {

    // Go to URL
    //await page.goto('https://www.bing.com/');

    await page.goto('https://www.bing.com/search?q=salesforce.com&form=QBLH&sp=-1&ghc=1&lq=0&pq=salesforce.com&sc=12-14&qs=n&sk=&cvid=72448D78C5E9446A8561975A1AA75A2A');

    // Search with keywords
    //await page.getByRole('textbox', { name: 'characters out of 2000' }).click();
    //await page.getByRole('textbox', { name: 'characters out of 2000' }).fill('salesforce.com');
    //await page.getByRole('textbox', { name: 'characters out of 2000' }).press('Enter');

    // await page.keyboard.down('Meta');
    // await page.keyboard.press('A');
    // //await page.keyboard.up('Meta');
    // await page.waitForTimeout(1000); // Wait for 1 second - Martin First self discovery
    // await page.keyboard.press('Enter');

    // Click on the SF website login link
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Login', exact: true }).click(),
    ]);
    // const [page2] -> Destructuring assignment to get the first element of the array returned by waitForEvent
    // await Promise.all -> Wait for multiple promises to resolve
    // const [page2] = await Promise.all([ ... ]) -> Wait for the popup to open and click on the login link
    // page.waitForEvent('popup') -> Wait for a new popup window to open

    // Validate web page the URL and the logo
    await page2.waitForLoadState();
    await expect(page2).toHaveURL('https://login.salesforce.com/');
    await expect(page2.getByAltText('Salesforce')).toBeVisible();

})

//test -> Function to create a test
// 'Title: My First Playwright Script' -> Name of the test
// async ({page}) -> Asynchronous function that takes a page object as an argument
// page -> Represents a single tab in the browser


