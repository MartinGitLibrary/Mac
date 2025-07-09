import {test, expect} from '@playwright/test';

test('Salesforce ADGQAPRO Login', async ({page}) => {

    // timeout
    test.setTimeout(120000); // Set timeout to 120 seconds for the entire test

    // Navigate to the Salesforce login page
    await page.goto('https://azgaming--qaadgpro.sandbox.my.salesforce.com/', {waitUntil: 'commit'});

    // max browser size
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    //wait for the DOM to be ready
    await page.waitForLoadState('load'); // load -> Waits until the load event is fired

    //zoom out browser to 70%   
    await page.evaluate(() => {
        document.body.style.zoom = '70%';
    });     

    
    

    // Wait for the page to load and the login form to be visible
    await page.waitForLoadState('networkidle'); // networkidle -> Waits until there are no network connections for at least 500 ms


    await page.getByRole('textbox', { name: 'Username' }).fill('martin.devasahayam@mastek.com.qaadgpro');
    await page.getByRole('textbox', { name: 'Password' }).type('Martin@101101');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

    await expect(page.getByTitle('ADG Certification')).toBeVisible({ timeout: 100000 }); // Wait for the ADG Certification page to be visible

    if (await page.getByTitle('ADG Certification').isVisible()) {
        console.log('Login successful, ADG Certification page is visible.');
    } else {
        await page.getByRole('button', { name: 'App Launcher' }).click();
        await page.getByRole('combobox', { name: 'Search apps and items...' }).fill('ADG Certification');
        await page.getByRole('option', { name: 'ADG Certification' }).click();
        await page.waitForLoadState();
        console.log('ADG Certification page is now visible after navigating through App Launcher.');
    }

    // Open Sites
    await page.getByRole('button', { name: 'Setup' }).click();
    await page.waitForLoadState();

    // Wait for the popup to open and click on the menu item
    const [page2] = await Promise.all ([
        page.waitForEvent('popup'),
        page.getByRole('menuitem', { name: 'Setup Opens in a new tab Setup for current app' }).click(),
    ]);

      // max browser size
    await page2.setViewportSize({ width: 1920, height: 1080 });

    //wait for the DOM to be ready
    await page2.waitForLoadState('load'); // load -> Waits until the load event is fired

    //zoom out browser to 70%   
    await page2.evaluate(() => {
        document.body.style.zoom = '70%';
    });     
    


    await page2.waitForLoadState();
    await page2.getByText('Quick FindExpandSetup').isVisible();

    await page2.getByRole('searchbox', { name: 'Quick Find' }).type('Sites');
    await page2.getByText('ExpandSites').isVisible();

    await page2.getByRole('link', { name: 'Sites', exact: true }).click(); 

    await expect(page2.getByRole('heading', { name: 'Sites' }).locator('span')).toBeVisible({ timeout: 100000 }); 

    // full scroll to the bottom inner container


    // Recorded Cursor Test

  // inner container scroll to the bottom
    await page.evaluate(() => {                 
        const container = document.querySelector('.slds-scrollable_y');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }
    );  

    //

    // const page2Promise = page2.waitForEvent('popup');
    // await page2s.locator('iframe[name="vfFrameId_1751095042520"]').contentFrame().getByRole('link', { name: 'https://azgaming--qaadgpro.sandbox.my.site.com/', exact: true }).click();
    // const page3a = await page2Promise;
    // await expect(page3a.getByRole('img', { name: 'ADG Arizona Department of' })).toBeVisible();


    //

    //wait for 10 seconds
    //await page2.waitForTimeout(10000); // Wait for 10 seconds to ensure the iframe is loaded
    
// Wait until the iframe is actually attached and visible
await page2.waitForSelector('iframe[name="vfFrameId_1751096846878"]', {
  state: 'visible', // or 'attached'
  timeout:30000, // optional if default timeout is short
});

// Now safely get the element handle
const iframeElementHandle = await page2.locator('iframe[name="vfFrameId_1751096846878"]').elementHandle();
if (!iframeElementHandle) throw new Error('Iframe not found');

const frame = await iframeElementHandle.contentFrame();
if (!frame) throw new Error('Iframe contentFrame not ready');

// Proceed with your click + popup wait
const [page3] = await Promise.all([
  page2.waitForEvent('popup'),
  frame.getByRole('link', {
    name: 'https://azgaming--qaadgpro.sandbox.my.site.com/',
    exact: true,
  }).click(),
]);





      // max browser size
    await page3.setViewportSize({ width: 1920, height: 1080 });

    //wait for the DOM to be ready
    await page3.waitForLoadState('load'); // load -> Waits until the load event is fired

    //zoom out browser to 70%   
    await page3.evaluate(() => {
        document.body.style.zoom = '70%';
    });     
    


    await page3.waitForLoadState();

    // Site Landing Page
    await expect(page3).toHaveURL('https://azgaming--qaadgpro.sandbox.my.site.com/');
    console.log('Site Landing Page URL:', page3.url());


})