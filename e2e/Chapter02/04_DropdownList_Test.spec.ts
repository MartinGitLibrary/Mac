import { test, expect } from '@playwright/test'

test( 'Title: Handling Dropdown list using playwright', async ({ page }) => {

    // URL goto
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button', { name: 'Create new Account' }).click();

    // Select the dropdown  value
    await page.getByLabel('Month').selectOption('3'); // March

    // Select dropdown using visible text

    await page.getByLabel('Month').selectOption('Aug'); // August

    // Validate all the options in the dropdown

    await expect(page.locator('#month > option')).toHaveText(['Playwright1', 'Play 2', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);


})











// import { test, expect } from '@playwright/test';

// test('Dropdown must contain only month names, nothing extra', async ({ page }) => {

//     await page.goto('https://www.facebook.com/'); // Replace with your actual URL
//     await page.getByRole('button', { name: 'Create new Account' }).click();

//     const dropdownOptions = page.locator('#month > option');
//     //await dropdownOptions.first().waitFor(); // Wait for dropdown to load

//     const actualTexts = await dropdownOptions.allTextContents();

//     const validMonths = new Set([
//         'Playwright', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'P'
//     ]);

//     for (const optionText of actualTexts) {
//         if (!validMonths.has(optionText)) {
//             throw new Error(`❌ Invalid dropdown option found: "${optionText}" is not a valid month`);
//         }
//     }

//     console.log('✅ All dropdown options are valid month names.');
// });


// import { test, expect } from '@playwright/test';

// test('Dropdown must contain only month names, nothing extra', async ({ page }) => {
//   await page.goto('https://www.facebook.com/');
//   await page.getByRole('button', { name: 'Create new Account' }).click();

//   const dropdownOptions = page.locator('#month > option');
//   //await dropdownOptions.first().waitFor({ timeout: 5000 });

//   const actualTexts = await dropdownOptions.allTextContents();
//   console.log('Dropdown options:', actualTexts);

//   if (actualTexts.length === 0) {
//     throw new Error('❌ Dropdown has no options — possible dynamic loading issue or wrong selector.');
//   }

//   const validMonths = new Set([
//     'Month', // keep this if Facebook shows placeholder
//     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//   ]);

//   for (const optionText of actualTexts) {
//     if (!validMonths.has(optionText)) {
//       throw new Error(`❌ Invalid dropdown option found: "${optionText}" is not a valid month`);
//     }
//   }

//   console.log('✅ All dropdown options are valid month names.');
// });
