import { expect, type Locator, type Page} from '@playwright/test';

export class SignupPage{
    readonly page: Page;
    readonly name: Locator;
    readonly emailAddress: Locator;
    readonly signupBtn: Locator;

    constructor(page: Page) {
        this.page = page
        this.name = page.getByPlaceholder('Name')
        this.emailAddress = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signupBtn = page.getByRole('button', { name: 'Signup' })
     }

     async Signup(name, emailAddress){
        await this.name.fill(name)
        await this.emailAddress.fill(emailAddress)
        await this.signupBtn.click()
     }
    
}