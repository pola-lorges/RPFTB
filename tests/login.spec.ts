import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SignupPage } from '../pages/signupPage';

test('test', async ({ page }) => {

  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  await homePage.gotoHomepage();
  await homePage.gotoSignupPage();
  await signupPage.Signup('pola', 'email@xyz.com')
  await page.getByLabel('Mr.').check();

  // await page.goto('https://automationexercise.com/');
  // await page.getByRole('link', { name: ' Signup / Login' }).click();
  // await page.getByPlaceholder('Name').click();
  // await page.getByPlaceholder('Name').fill('POLA');
  // await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  // await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('lorges@xyz.com');
  // await page.getByRole('button', { name: 'Signup' }).click();
  // await page.getByLabel('Mr.').check();
  // await page.getByLabel('Password *').click();
  // await page.getByLabel('Password *').fill('Lorges@xyz');
  // await page.locator('#days').selectOption('16');
  // await page.locator('#months').selectOption('4');
  // await page.locator('#years').selectOption('1999');
  // await page.getByLabel('Sign up for our newsletter!').check();
  // await page.getByLabel('Receive special offers from our partners!').check();
  // await page.getByLabel('First name *').click();
  // await page.getByLabel('First name *').fill('Lorges');
  // await page.getByLabel('Last name *').click();
  // await page.getByLabel('Last name *').fill('POLA');
  // await page.getByLabel('Company', { exact: true }).click();
  // await page.getByLabel('Company', { exact: true }).fill('Company');
  // await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').click();
  // await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill('Street address, P.O. Box, Company name');
  // await page.getByLabel('Country *').selectOption('United States');
  // await page.getByLabel('State *').click();
  // await page.getByLabel('State *').fill('Californie');
  // await page.getByLabel('Country *').selectOption('Canada');
  // await page.getByLabel('State *').click();
  // await page.getByLabel('State *').fill('Quebec');
  // await page.getByLabel('City *').click();
  // await page.getByLabel('City *').fill('Montreal');
  // await page.locator('#zipcode').click();
  // await page.locator('#zipcode').fill('1234');
  // await page.getByLabel('Mobile Number *').click();
  // await page.getByLabel('Mobile Number *').fill('+1 6666 6666 6666');
  // await page.getByRole('button', { name: 'Create Account' }).click();
  // await page.getByRole('link', { name: 'Continue' }).click();
  // await page.frameLocator('iframe[name="aswift_4"]').getByLabel('Close ad').click();
});