import { test, expect } from '@playwright/test';

test.describe('Reports', async () => {

    test('Test 1', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    })

    test('Test 2', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    })

    test('Test 3', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    })

    test('Test 4', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
        throw new Error('👻 This test is intentionally failing');
    })

})