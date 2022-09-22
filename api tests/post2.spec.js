import {test, expect} from "@playwright/test"
import faker from 'faker'


test.describe('Creating a user via API', ()=>{
    test.use({
        baseURL: 'https://gorest.co.in/public/v2/users'
    })

    test('Create a user via API, POST request', async({request,baseURL})=>{

        const newUser = await request.post(`${baseURL}`, {
            headers: {
                Authorization: 'Bearer 031748f0f31aefc94888aba83d3ed3d68f71073e13cc528f8ae55757250342e5',
                "Content-Type": 'application/json'
            },
            data:{
                name: "Aga Smith",
                gender: "female",
                email: faker.internet.exampleEmail(),
                status: "active"
            },
        })
        let responseBody = await newUser.json()
        let userId = responseBody.id
        expect(newUser.status()).toBe(201)
        expect(newUser.ok()).toBeTruthy()
        expect(responseBody.id).toBe(userId)

    })
})