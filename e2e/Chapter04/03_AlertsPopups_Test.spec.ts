import { test, expect } from '@playwright/test';

test ('Handling Alerts Popups in Playwright', async ({ page }) => {

    // Navigate to selenium alerts page
    //await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {

        // Log the dialog message
        console.log(`Dialog message: ${dialog.message()}`);

        // Accept the dialog
        dialog.accept();

        // Dismiss the dialog
        // dialog.dismiss();
        console.log(`Dialog Type: ${dialog.type()}`);


    })

    await page.getByText('See an example alert', { exact: true }).click();

})

test ('Handling Confirm Popups in Playwright', async ({ page }) => {

await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {

        console.log(`Dialog Type: ${dialog.type()}`);
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept();

    })

    await page.getByText('See a sample confirm', { exact: true }).click();

})

test ('Handling Prompt Popups in Playwright', async ({ page }) => {

await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async(dialog) => {

        console.log(`Dialog Type: ${dialog.type()}`);
        const acceptValue = 'Hello, World!';
        console.log(`Dialog message: ${dialog.message()}`);
        console.log(`Value: ${acceptValue}`);
        dialog.accept(acceptValue);

    })

    await page.getByText('See a sample prompt', { exact: true }).click();

})
