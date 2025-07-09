// Implort Playwright Module

import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    // This hook runs once before all tests in the file
    console.log('Running before all tests....');
})

test.beforeEach(async ({ page }) => {
    // This hook runs before each test in the file
    console.log('....Running before each test....');
    await page.goto('https://www.bing.com/search?q=salesforce.com&form=QBLH&sp=-1&ghc=1&lq=0&pq=salesforce.com&sc=12-14&qs=n&sk=&cvid=72448D78C5E9446A8561975A1AA75A2A');
})

test.afterEach(async () => {
    // This hook runs after each test in the file
    console.log('....Running after each test....');
})

test.afterAll(async () => {
    // This hook runs once after all tests in the file
    console.log('Running after all tests....');
})

// Write a test 1
test('Title: Test 1', async ({ page }) => {

    console.log('Running test 1...');

    // Go to URL

    //await page.goto('https://www.bing.com/search?q=salesforce.com&form=QBLH&sp=-1&ghc=1&lq=0&pq=salesforce.com&sc=12-14&qs=n&sk=&cvid=72448D78C5E9446A8561975A1AA75A2A');


    // Click on the SF website login link
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Login', exact: true }).click(),
    ]);


    // Validate web page the URL and the logo
    await page2.waitForLoadState();
    await expect(page2).toHaveURL('https://login.salesforce.com/');
    await expect(page2.getByAltText('Salesforce')).toBeVisible();



})

// Write a test 2
test('Title: Test 2', async ({ page }) => {

    console.log('Running test 2...');

    // Go to URL

    //await page.goto('https://www.bing.com/search?q=salesforce.com&form=QBLH&sp=-1&ghc=1&lq=0&pq=salesforce.com&sc=12-14&qs=n&sk=&cvid=72448D78C5E9446A8561975A1AA75A2A');


    // Click on the SF website login link
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Login', exact: true }).click(),
    ]);


    // Validate web page the URL and the logo
    await page2.waitForLoadState();
    await expect(page2).toHaveURL('https://login.salesforce.com/');
    await expect(page2.getByAltText('Salesforce')).toBeVisible();



})

