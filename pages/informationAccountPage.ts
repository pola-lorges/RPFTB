import { expect, type Locator, type Page} from '@playwright/test';

export class InformationAccountPage{
    readonly page: Page;
    readonly genderMr: Locator;
    readonly genderMrs: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly days: Locator;
    readonly months: Locator;
    readonly years: Locator;
    readonly newsletter: Locator;
    readonly offer: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly adress: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountBtn: Locator;
    readonly continueBtn: Locator;
    

    constructor(page: Page) {
        this.page = page
        this.genderMr = page.getByLabel('Mr.')
        this.genderMrs = page.getByLabel('Mrs.')
        this.password = page.getByLabel('Password *')
        this.days = page.locator('#days')
        this.months = page.locator('#months')
        this.years = page.locator('#years')
        this.newsletter = page.getByLabel('Sign up for our newsletter!')
        this.offer = page.getByLabel('Receive special offers from our partners!')
        this.firstName = page.getByLabel('First name *')
        this.lastName = page.getByLabel('Last name *')
        this.company = page.getByLabel('Company', { exact: true })
        this.adress = page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)')
        this.country = page.getByLabel('Country *')
        this.state = page.getByLabel('State *')
        this.city = page.getByLabel('City *')
        this.zipcode = page.locator('#zipcode')
        this.mobileNumber = page.getByLabel('Mobile Number *')
        this.createAccountBtn = page.getByRole('button', { name: 'Create Account' })
        this.continueBtn = page.getByRole('link', { name: 'Continue' })
     }

     async Signup(name, emailAddress){
       
     }
}