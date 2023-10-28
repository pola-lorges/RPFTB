import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupPage } from '../../pages/signupPage';
import { InformationAccountPage } from '../../pages/informationAccountPage';

test('Register user', async ({ page }) => {

  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const informationAccountpage = new InformationAccountPage(page)
  await homePage.gotoHomepage();
  await homePage.gotoSignupPage();
  await signupPage.Signup('pola', 'email@xyz.com')
  await informationAccountpage.InformationAccountForm('Mr', 'azerty1234', '12', '3', '2000', 'Lorges', 'pola', 'Company', 'AZERTY', 'Canada', 'Quebec', 'montreal', '1345', '+1234567')
  
});