import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

  testDir: './e2e',

  /* Golable Test Timeout */
  globalTimeout: 60 * 60 * 1000, //all test should executed with in 1 hour

  // Test Level
  timeout: 0 * 60 * 1000, // 1 min * 60 sec * 60000 ms

  expect : {
    timeout:10000 //10 sec
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  //forbidOnly: true, // Fail the build if test.only is left in the source code
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 5, // Number of workers to use for parallel test execution
  // --workers 2
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['list'],
    //['dot'],
    ['json', { outputFile: 'json-test-report.json' }],
    ['junit', { outputFile: 'junit-test-report.xml' }],
    ['allure-playwright'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    testIdAttribute: 'data-tab-item', // Set the test ID attribute to an empty string to disable it // Custom test ID attribute
    headless: false,
    video: 'on',
    screenshot: 'on',
    trace: 'on',

    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    //viewport: { width: 1440, height: 1024 }, // Set the viewport size

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    actionTimeout: 10000,
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    {
      name: 'Google Chrome Max',
      use: {
        channel: 'chrome',              // Use real Chrome
        viewport: null,                 // Let window size control the viewport
        launchOptions: {
          headless: false,
          args: ['--start-maximized']   // Maximize like manual click
        }
      }
    }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
