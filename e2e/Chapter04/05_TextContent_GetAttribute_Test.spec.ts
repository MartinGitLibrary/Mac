import { test, expect } from '@playwright/test';

test('Get Text & Get Attribute value in playwright', async ({ page }) => {

    await page.goto('https://github.com/MartinGitLibrary');

    //const name = await page.locator('[itemprop="name"]').textContent();
    const name = await page.locator('[itemprop="name"]').innerText(); // both works
    const finalName = name?.trim(); // Trim any extra whitespace
    console.log(`Name is : ${finalName}`);

    //expect(finalName).toContain(name);
    expect(finalName).toBe('Martin Personal');

    // Get the attribute value
    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is : ${attributeValue}`);

});