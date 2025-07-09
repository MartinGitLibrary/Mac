import { test, expect } from '@playwright/test'

test('Page Visual Comparison in Playwright', async({ page }) => {

    await page.goto('https://github.com/login');

    //await page.screenshot({path: './screenshots/Visual_testing.png', fullPage: true });

    await expect(page).toHaveScreenshot('GitHubLoginPage.png'); // First time this code will fail, it will create a snaphot folder

    await page.locator('#login_field').fill('Martin');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png'); 

})

test('Element Visual Comparison in Playwright', async({ page }) => {

    await page.goto('https://github.com/login');

    //await expect(page).toHaveScreenshot('GitHubLoginPage.png'); // First time this code will fail, it will create a snaphot folder

    const element = page.locator('[class="auth-form-body mt-3"]');

        await expect(element).toHaveScreenshot('GitHubLoginForm.png');

    await page.locator('#login_field').fill('Martin');

    await expect(element).toHaveScreenshot('GitHubLoginForm.png'); 

})