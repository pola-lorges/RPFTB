import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupPage } from '../../pages/signupPage';

test('Login User Invalid scenario', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    await homePage.gotoHomepage();
    await homePage.gotoSignupPage();
    await signupPage.Login('pola', 'email@xyz.com')
    await homePage.checkValidlogin()

});

test('Login User Valid scenario', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    await homePage.gotoHomepage();
    await homePage.gotoSignupPage();
    await signupPage.Login('pola', 'email@xyz.com')
    await homePage.checkInvalidlogin()

});