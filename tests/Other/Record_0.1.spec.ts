import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('testuser');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - main:
      - heading "Sign in to GitHub" [level=1]
      - button "Dismiss this message"
      - alert: Incorrect username or password.
      - text: Username or email address
      - textbox "Username or email address"
      - text: Password
      - textbox "Password"
      - link "Forgot password?":
        - /url: /password_reset
      - button "Sign in"
      - heading "Password login alternatives" [level=2]
      - paragraph:
        - button "Sign in with a passkey"
      - paragraph:
        - text: New to GitHub?
        - link "Create an account":
          - /url: /signup?return_to=https%3A%2F%2Fgithub.com%2Flogin&source=login
    `);
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - main:
      - heading "Sign in to GitHub" [level=1]
      - button "Dismiss this message"
      - alert: Incorrect username or password.
      - text: Username or email address
      - textbox "Username or email address"
      - text: Password
      - textbox "Password"
      - link "Forgot password?":
        - /url: /password_reset
      - button "Sign in"
      - heading "Password login alternatives" [level=2]
      - paragraph:
        - button "Sign in with a passkey"
      - paragraph:
        - text: New to GitHub?
        - link "Create an account":
          - /url: /signup?return_to=https%3A%2F%2Fgithub.com%2Flogin&source=login
    `);
});