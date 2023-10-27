import { expect, type Locator, type Page} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly signupLoginBtn: Locator;
    constructor(page: Page) {
       this.page = page
       this.signupLoginBtn = page.locator('a', { hasText: ' Signup / Login' })
    }

    async gotoHomepage(){
        await this.page.goto('https://automationexercise.com/');
    }

    async gotoSignupPage(){
        await this.signupLoginBtn.click();
    }
}