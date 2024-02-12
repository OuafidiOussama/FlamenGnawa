const supertest =require("supertest")
const app = require('../app')
const mongoose = require('mongoose')

describe('Test userController', () => { 
    let jwtToken;
    let user;

    beforeAll(async()=>{
        const authenticationRes = await supertest(app)
        .post('/api/user/login')
        .send({
            email: "oussama@gmail.com",
            password: "oussama"
        })

        jwtToken = authenticationRes.body.jwtToken
        user = authenticationRes.body.user
    })

    afterAll(async()=>{
        await mongoose.disconnect();
    })

    it("Should Log me In As SuperAdmin", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "oussama@gmail.com",
            password: "oussama"
        })

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success");
        expect(response.body).toHaveProperty("user");
        expect(response.body).toHaveProperty("jwtToken");
    });

    it("Should Throw and error Please Provide Email ", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "",
            password: "oussama"
        })

        expect(response.status).toBe(403);
        expect(response).toHaveProperty("text");
    });

    it("Should Throw and error Please Provide Password", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "oussama@gmail.com",
            password: ""
        })

        expect(response.status).toBe(403);
        expect(response).toHaveProperty("text");
    });

    it("Should Throw and error invalid email or password", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "test@gmail.com",
            password: "test"
        })

        expect(response.status).toBe(400);
        expect(response).toHaveProperty("text");
    });

    it("Should Throw and error invalid email or password", async () => {
        const response = await supertest(app)
        .post("/api/user/login")
        .accept("")
        .send({
            email: "oussama@gmail.com",
            password: "test"
        })

        expect(response.status).toBe(400);
        expect(response).toHaveProperty("text");
    });


    it("Should Register a new Syndic", async()=>{
        const response = await supertest(app)
        .post('/api/user/register')
        .accept("")
        .send({
            "first_name": "oussama",
            "last_name": "ouafidi",
            "email": "user@gmail.com",
            "password": "userpassword",
            "phone": "0707787300",
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("success")
        expect(response.body).toHaveProperty("user")
    })

    it("Should Throw validation Error", async()=>{
        const response = await supertest(app)
        .post('/api/user/register')
        .accept("")
        .send({
            "first_name": "",
            "last_name": "",
            "email": "",
            "password": "",
            "phone": "",
        })

        expect(response.status).toBe(500)
        expect(response).toHaveProperty("text")
    })

    it("Should Throw email Already exists error", async()=>{
        const response = await supertest(app)
        .post('/api/user/register')
        .accept("")
        .send({
            "firstName": "test",
            "lastName": "test",  
            "email": "oussama@gmail.com",
            "password": "testtest"
        })

        expect(response.status).toBe(400)
        expect(response).toHaveProperty("text")
    })
 })