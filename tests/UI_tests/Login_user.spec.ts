import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupPage } from '../../pages/signupPage';
import * as validLogindata from '../../datas/ValidLogin.json';
import * as invalidLogindata from '../../datas/InvalidLogin.json';


test('Login User Invalid scenario', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    await homePage.gotoHomepage();
    await homePage.gotoSignupPage();
    await signupPage.Login(invalidLogindata.email, invalidLogindata.password)
    await homePage.checkInvalidlogin()

});

test('Login User Valid scenario', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    await homePage.gotoHomepage();
    await homePage.gotoSignupPage();
    await signupPage.Login(validLogindata.email, validLogindata.password)
    await homePage.checkValidlogin()

});