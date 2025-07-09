import { test, expect } from '@playwright/test';

test('Selecting date value in Playwright', async({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/');

    // Hardcoded date
    const iframe = page.frameLocator('[class="demo-frame"]');
    // await iframe.locator('[id="datepicker"]').fill('07/02/2025');

    // Selecting Dynamic date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();    

    // Selecting past date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="15"').click();

    // Selecting future date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="15"').click();



})