
import { test, expect } from '@playwright/test';

test('checkActionBox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.waitForTimeout(3000);
  await page.check("//input[1]");
   await page.waitForTimeout(3000);
   
});

test('UncheckActionBox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.waitForTimeout(3000);
  await page.uncheck("//input[2]");
   await page.waitForTimeout(3000);
   
});
test('TypeAction', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.waitForTimeout(3000);
  await page.selectOption("//input[@placeholder='What needs to be done?']","My demo test",{delay:2000});

   
});


test('SelectOption', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.waitForTimeout(3000);
  await page.selectOption("#dropdown","2");
   await page.waitForTimeout(3000);
   
});


test('Presskey', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.waitForTimeout(3000);
  await page.fill("//input[@placeholder='What needs to be done?']","Press Enter");
   await page.waitForTimeout(3000);

  await page.press("//input[@placeholder='What needs to be done?']","Enter");

   await page.waitForTimeout(3000);
   
});
test('HoverAction', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  await page.hover("//a[@class='getStarted_Sjon']");
   await page.waitForTimeout(3000);
   
});
test('DragDrop', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  await page.waitForTimeout(3000);
  await page.dragAndDrop("//div[@id='column-a']","//div[@id='column-b']");
   await page.waitForTimeout(3000);
   
});

//ss
test('Screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  await page.screenshot({path:'Test1.png'});
  await page.waitForTimeout(3000);
});