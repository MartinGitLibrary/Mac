import { test, expect } from '@playwright/test';

test('Simulate fullscreen in Chromium using CDP', async ({ page }) => {
  
    // Got to the Salesforce login page

    await page.goto('https://azgaming--qaadgpro.sandbox.my.salesforce.com/');


// inner container scroll to the bottom
    await page.evaluate(() => {                 
        const container = document.querySelector('.slds-scrollable_y');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }
    );  

});
