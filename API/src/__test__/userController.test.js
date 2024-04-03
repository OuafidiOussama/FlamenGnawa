const supertest = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("Test userController", () => {
  let jwtToken;
  let user;

  beforeAll(async () => {
    const authenticationRes = await supertest(app)
      .post("/api/user/login")
      .send({
        email: "oussamaouafidi0@gmail.com",
        password: "oussamaouafidi",
      });

    jwtToken = authenticationRes.body.jwtToken;
    user = authenticationRes.body.user;
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("Should Log me In As Member", async () => {
    const response = await supertest(app)
      .post("/api/user/login")
      .accept("")
      .send({
        email: "hamza@member.com",
        password: "flamengnawa",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("jwtToken");
    expect(response.body).toHaveProperty("user");
  });

  it("Should Throw and error Please Provide Email ", async () => {
    const response = await supertest(app)
      .post("/api/user/login")
      .accept("")
      .send({
        email: "",
        password: "flamengnawa",
      });

    expect(response.status).toBe(403);
    expect(response).toHaveProperty("text");
  });

  it("Should Throw and error Please Provide Password", async () => {
    const response = await supertest(app)
      .post("/api/user/login")
      .accept("")
      .send({
        email: "hamza@member.com",
        password: "",
      });

    expect(response.status).toBe(403);
    expect(response).toHaveProperty("text");
  });

  it("Should Throw and error invalid email or password", async () => {
    const response = await supertest(app)
      .post("/api/user/login")
      .accept("")
      .send({
        email: "test@member.com",
        password: "test",
      });

    expect(response.status).toBe(400);
    expect(response).toHaveProperty("text");
  });

//   it("Should Register a new user", async () => {
//     const response = await supertest(app)
//       .post("/api/user/register")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         firstName: "test",
//         lastName: "test",
//         profil_picture: "test",
//         email: "test@test.com",
//         password: "testtest",
//         phone: 707070707,
//       });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty("success");
//     expect(response.body).toHaveProperty("user");
//   });

  it("Should Throw validation Error", async () => {
    const response = await supertest(app)
      .post("/api/user/register")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        firstName: "",
        lastName: "",
        profil_picture: "",
        email: "",
        password: "",
        phone: "",
      });

    expect(response.status).toBe(500);
    expect(response).toHaveProperty("text");
  });

  it("Should Throw email Already exists error", async () => {
    const response = await supertest(app)
      .post("/api/user/register")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        firstName: "test",
        lastName: "test",
        profil_picture: "test",
        email: "oussama@member.com",
        password: "testtest",
        phone: 707070707,
      });

    expect(response.status).toBe(400);
    expect(response).toHaveProperty("text");
  });
});
