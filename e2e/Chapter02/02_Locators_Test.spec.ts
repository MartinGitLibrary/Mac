import { test, expect } from '@playwright/test';

test('Locators Test Case', async ({ page }) => {

    /**
     * Author's Note: Martin [ getByRole || getByLabel || getByAltText || getByTestId || getByText ]
     */

    //await page.goto('https://github.com/MartinGitLibrary', { waitUntil: 'commit' });

    // getByRole -> Selects an element by its role
    //await page.getByRole('link', { name: 'Sign in' }).click();

    // getByLabel -> Selects an element by its label
    //await page.getByLabel('Homepage', { exact : true }).first().click();

    // getByAltText -> Selects an element by its alt text
    //await page.getByAltText("View MartinGitLibrary's full-sized avatar").click();

    // getByTestId -> Selects an element by its test ID
    //await page.getByTestId("repositories").first().click(); // first() -> Selects the first element that matches the selector

    // getByText -> Selects an element by its text content
    //await page.getByText("sign up").click();

    /**
     * Author's Note: Martin [ getByPlaceholder || XPath || CSS Selector ]
     */

    //await page.goto('https://www.youtube.com/@testerstalk', { waitUntil: 'commit' }); // For Placeholder and XPath and CSS Selectors

    //await page.getByPlaceholder('Search').fill('testers talk using getByPlaceholder locator');

    //await page.locator('//input[@name="search_query"]').fill('testers talk using Xpath locator');  // Using XPath locator

    //await page.locator('input[name="search_query"]').fill('testers talk using CSS Selector locator'); // Using CSS Selector locator

    /**
     * Author's Note: Martin [ getByTitle ]
     */

    await page.goto('https://www.google.com/', { waitUntil: 'commit' });

    // getByTitle -> Selects an element by its title attribute
    await page.getByTitle('Search').fill('Martin Git Library');


})