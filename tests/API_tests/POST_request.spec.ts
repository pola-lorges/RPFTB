import {test, expect}from '@playwright/test';
import * as signupdata from '../../datas/signupdata.json';
import * as productListdata from '../../datas/Productlistdata.json';
import * as validLogindata from '../../datas/ValidLogin.json';
import * as invalidLogindata from '../../datas/InvalidLogin.json';
import * as signupAPIdata from '../../datas/signupAPIdata.json'



test('POST To Create/Register User Account', async({request})=>{
    const response = await request.post('/signup', {
        data: {
            "name" : signupAPIdata.name, 
            "email" : signupAPIdata.email,
            "title" : signupAPIdata.gender, 
            "password" : signupAPIdata.password, 
            "birth_date" : signupAPIdata.days, 
            "birth_month" : signupAPIdata.months, 
            "birth_year" : signupAPIdata.years, 
            "firstname" : signupAPIdata.firstname,
            "lastname" : signupAPIdata.lastname, 
            "company" : signupAPIdata.company, 
            "address1" : signupAPIdata.adress1, 
            "address2" : signupAPIdata.adress2, 
            "country" : signupAPIdata.country, 
            "zipcode" : signupAPIdata.zipcode, 
            "state" : signupAPIdata.state, 
            "city" : signupAPIdata.city, 
            "mobile_number": signupAPIdata.mobileNumber
         }
        })

        expect(response.status()).toBe(201)

        expect(response.json()).toContain('User created!')
})

test('POST To Verify Login with valid details', async({request})=>{
    const response = await request.post('/verifyLogin', {
        
        data: {
            email : invalidLogindata.email, 
            password : invalidLogindata.password 
        },
        
        })

        expect(response.status()).toBe(200)

        expect(response.json()).toContain('User exists!')
})

test('POST To Verify Login with invalid details', async({request})=>{

    const response = await request.post('/login', {
        
            data: {
                email : validLogindata.email, 
                password : validLogindata.password 
            },
        
        })

        console.log(await response.body());

        expect(response.status()).toBe(404)

        expect(response.body()).toContain('User not found!')
        
})

test('POST To Search Product', async({request})=>{
    const response = await request.post('/searchProduct', {
        data: {
            "search" : productListdata.Search_name
         }
        })

        console.log(await response);

        expect(response.status()).toBe(200)

        expect(response.json).toContain(productListdata.Search_name)
})

