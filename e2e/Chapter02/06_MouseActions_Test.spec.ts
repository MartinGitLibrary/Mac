import { test, expect } from '@playwright/test';
import { moveCursor } from 'readline';

test('Title: Mouse Actions', async({ page }) => {

    // Goto URL
    await page.goto('https://www.yahoo.com/search?q=salesforce');

    await page.getByLabel('Magnifying glass icon').click();

    // Wait for results to load
    //await page.waitForSelector('#web');

    // Scroll down the page using mouse wheel
    //await page.mouse.wheel(0, 2000);
    //await page.waitForSelector('#web');

    // left button click
    //await page.getByRole('link', { name : 'Login | Salesforce' }).first().click({ button : 'left' });
    //await page.locator('//span[text()="Login | Salesforce"]').first().click( { button : 'left' } );

    // middle button click
    //await page.getByRole('link', { name : 'Login | Salesforce' }).first().click({ button : 'middle' });

    // right button click
    //await page.getByRole('link', { name : 'Login | Salesforce' }).first().click({ button : 'right' });

    // mouse hover operation
    await page.getByLabel('Search by voice').first().hover();

    // double click
    await page.getByLabel('Search by voice').first().dblclick();

    // const popup = await page.getByText('search.yahoo.com wants to')

    // if (await popup.isVisible().catch(() => false)) {
    // console.log('Popup detected');
    // await page.getByRole('button', { name: 'Allow this time' }).click();
    // console.log('Popup handled');
    // }

    // console.log('success!');


})

