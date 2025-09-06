
import { test, expect } from '@playwright/test';

test('Action', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  await page.click("//a[@class='getStarted_Sjon']");
  await page.waitForTimeout(3000);

});


