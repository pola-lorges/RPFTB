import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupPage } from '../../pages/signupPage';
import { InformationAccountPage } from '../../pages/informationAccountPage';
import * as signupdata from '../../datas/signupdata.json';

test('Register user', async ({ page }) => {

  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const informationAccountpage = new InformationAccountPage(page)
  await homePage.gotoHomepage();
  await homePage.gotoSignupPage();
  await signupPage.Signup(signupdata.name, signupdata.email)
  await informationAccountpage.InformationAccountForm(signupdata.gender, signupdata.password, signupdata.days, signupdata.months, signupdata.years, signupdata.firstname, signupdata.lastname, signupdata.company, signupdata.adress, signupdata.country, signupdata.state, signupdata.city, signupdata.zipcode, signupdata.mobileNumber)
  await informationAccountpage.checkRegisterwin()

});