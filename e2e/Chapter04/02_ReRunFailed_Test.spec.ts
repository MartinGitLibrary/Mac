import { test, expect } from '@playwright/test';

test.describe('Browser Context Tests', () => {
  test('should have a title', async ({ page }) => {
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Example Domain');
  });

  test('should navigate to another page', async ({ page }) => {
    await page.goto('https://example.com');
    await page.click('text=More information...');
    expect(await page.url()).toContain('https://www.iana.org/help/example-domains');
  });

    test('Test 3', async ({ page }) => {

        expect(true).toBe(false); // This will fail

    });

    test('Test 4', async ({ page }) => {

        expect(true).toBe(true); // This will pass
        throw new Error('👻 This test will fail'); // This will cause the test to fail 
    
    });


});

// npx playwright test --last-failed >> to run the failed only tests

// refer test-results/.last-run.json
// refer save-last-run.js
// refer package.json [ "scripts": { "test": "npx playwright test && node save-last-run.js" } ]