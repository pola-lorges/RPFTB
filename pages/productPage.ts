import { expect, type Locator, type Page} from '@playwright/test';
import { count } from 'console';

export class ProductPage{
    readonly page: Page;
    readonly searchBar: Locator;
    readonly searchBtn: Locator;
    readonly firstCart: Locator;
    readonly addCartBtn: Locator;
    readonly addedBtn: Locator;
    constructor(page: Page) {
       this.page = page
       this.searchBar = page.getByPlaceholder('Search Product')
       this.firstCart = page.locator('.single-products').first()
       this.searchBtn = page.getByRole('button', { name: '' })
       this.addCartBtn = page.locator('.overlay-content > .btn').first()
       this.addedBtn = page.getByRole('button', { name: 'Continue Shopping' })
    }


    async SearchAndAddToCartProduct(search){
        await this.searchBar.fill(search)
        await this.searchBtn.click()
        await this.page.waitForTimeout(2000)
        await this.firstCart.hover() 
        await this.addCartBtn.click() 
        await expect(this.page.getByRole('heading', { name: 'Added!' })).toHaveText('Added!')
        await this.addedBtn.click()
        await this.page.waitForTimeout(2000)
    }

    
}


