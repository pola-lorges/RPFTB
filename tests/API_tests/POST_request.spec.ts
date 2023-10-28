import {test, expect}from '@playwright/test';

test('POST To Create/Register User Account', async({request})=>{
    const response = await request.post('https://automationexercise.com/api/createAccount', {
        data: {
            name :'', 
            email :'', 
            password :'', 
            birth_date :'', 
            birth_month :'', 
            birth_year :'', 
            firstname :'',
            lastname :'', 
            company :'', 
            address1 :'', 
            address2 :'', 
            country :'', 
            zipcode :'', 
            state :'', 
            city :'', 
            mobile_number:''
         }
        })

        expect(response.status()).toBe(201)

        expect(response.body()).toBe('User created!')
})

test('POST To Verify Login with valid details', async({request})=>{
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        data: {
            email :'', 
            password :'', 
         }
        })

        expect(response.status()).toBe(200)

        expect(response.body()).toBe('User exists!')
})

test('POST To Verify Login with invalid details', async({request})=>{
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        data: {
            email :'', 
            password :'', 
         }
        })

        expect(response.status()).toBe(404)

        expect(response.body()).toBe('User not found!')
})

test('POST To Search Product', async({request})=>{
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
        data: {
            search_product : ''
         }
        })

        expect(response.status()).toBe(200)

        expect(response.body()).toContain('')
})