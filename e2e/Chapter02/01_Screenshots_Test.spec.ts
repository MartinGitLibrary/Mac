// Implort Playwright Module

import { test, expect } from '@playwright/test';

test('Capture Screenshots in Playwright', async ({ page }) => {

    await page.goto('https://www.youtube.com/@testerstalk', { waitUntil: 'commit' });

    // Element Screenshot

    await page.locator('#page-header-container').screenshot({ path: './screenshots/element_screenshot.png' });

    // Page Screenshot

    await page.screenshot({ path: './screenshots/page_screenshot.png' });

    // // wait until network is idle
    // await page.waitForLoadState('networkidle'); // Ensure all network requests are completed
    // // wait until screen is fully loaded
    // await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully rendered

    // Full Page Screenshot
    await page.screenshot({ path: './screenshots/full_page_screenshot.png', fullPage: true });


    // close browser
    await page.close();

})

