import { expect, type Locator, type Page} from '@playwright/test';

export class SignupPage{
    readonly page: Page;
    readonly name: Locator;
    readonly emailAddress: Locator;
    readonly signupBtn: Locator;
    readonly loginEmail: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page
        this.name = page.getByPlaceholder('Name')
        this.emailAddress = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signupBtn = page.getByRole('button', { name: 'Signup' })
        this.loginEmail = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.password = page.getByPlaceholder('Password')
        this.loginBtn = page.getByRole('button', { name: 'Login' })
     }

     async Signup(name, emailAddress){
        await this.name.fill(name)
        await this.emailAddress.fill(emailAddress)
        await this.signupBtn.click()

        await expect(this.page).toHaveURL("https://automationexercise.com/signup")
     }

     async Login(email, password){
        await this.loginEmail.fill(email)
        await this.password.fill(password)
        await this.loginBtn.click()

        await expect(this.page).toHaveURL("https://automationexercise.com")
     }
    
}