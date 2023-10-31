import { ProductPage } from './../../pages/productPage';
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import * as productListdata from '../../datas/Productlistdata.json';

test('Add to Cart ', async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page)
    
    const products: string[] = [];
    productListdata.Productlist.forEach(function(value){
        products.push(value.Productname)
    })
    
    console.log (products)
    await homePage.gotoHomepage()
    await homePage.gotoProductsPage()

    for (let i = 0 ; i<products.length; i++){
        
        await productPage.SearchAndAddToCartProduct(products[i])
        
    }
    
    

});

