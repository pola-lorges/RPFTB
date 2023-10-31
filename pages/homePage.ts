import { expect, type Locator, type Page} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly signupLoginBtn: Locator;
    readonly logoutBtn: Locator;
    readonly productsBtn: Locator;
    constructor(page: Page) {
       this.page = page
       this.signupLoginBtn = page.locator('a', { hasText: ' Signup / Login' })
       this.logoutBtn = page.getByRole('link', { name: ' Logout' })
       this.productsBtn = page.getByRole('link', { name: ' Products' })
    }

    async gotoHomepage(){
        await this.page.goto('https://automationexercise.com/');
    }

    async gotoSignupPage(){
        await this.signupLoginBtn.click();
    }

    async gotoProductsPage(){
        await this.productsBtn.click();
    }

    async checkValidlogin(){
        await expect(this.logoutBtn).toBeVisible()
        await expect(this.page).toHaveURL("https://automationexercise.com")
    }

    async checkInvalidlogin(){
        await expect(this.page).toHaveURL("https://automationexercise.com/login")
    }

}