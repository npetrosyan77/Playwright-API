import {test, expect} from "@playwright/test"


test.describe('API testing via PLaywright', () => {
    test.use({
        baseUrl: 'https://restful-booker.herokuapp.com/auth'

    })
    test('Checking POST request', async ({request, baseUrl}) => {
       let newUser = await request.post(`${baseUrl}`, {
            data: {
                "username" : "Anna Frank",
                "password" : "afrank45"
            },
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(await newUser.json())
          expect(newUser.status()).toBe(200)
    })
})