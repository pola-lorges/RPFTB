import { expect, type Locator, type Page} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly signupLoginBtn: Locator;
    readonly logoutBtn: Locator;
    constructor(page: Page) {
       this.page = page
       this.signupLoginBtn = page.locator('a', { hasText: ' Signup / Login' })
       this.logoutBtn = page.getByRole('link', { name: ' Logout' })
    }

    async gotoHomepage(){
        await this.page.goto('https://automationexercise.com/');
    }

    async gotoSignupPage(){
        await this.signupLoginBtn.click();
    }

    async checkValidlogin(){
        await expect(this.logoutBtn).toBeVisible()
    }

    async checkInvalidlogin(){
        await expect(this.page).toHaveURL("https://www.automationexercise.com/login")
    }
}