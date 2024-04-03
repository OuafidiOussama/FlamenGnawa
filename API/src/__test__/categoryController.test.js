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

  it("Should Get All Categories ", async () => {
    const response = await supertest(app)
      .get("/api/categories/allCategories")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("categories");
  });

  it("Should Get Category By Id ", async () => {
    const response = await supertest(app)
      .get("/api/categories/category/6609c755e6522df4b1ca0619")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("category");
  });

  it("Should throw category not found ", async () => {
    const response = await supertest(app)
      .get("/api/categories/category/660cb6e804d574fcd09945ca")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send();

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });

//   it("Should create a new category ", async () => {
//     const response = await supertest(app)
//       .post("/api/categories/create")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         name: "test",
//         description: "test",
//         categoryPicture: "test",
//       });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty("success");
//     expect(response.body).toHaveProperty("category");
//   });

  it("Should Update Category ", async () => {
    const response = await supertest(app)
      .put("/api/categories/update/660cc1285c300fbee13523bc")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        description: "update test",
        categoryPicture: "update test",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("updatedCategory");
  });

  it("Should Update Category (partial)", async () => {
    const response = await supertest(app)
      .put("/api/categories/update/660cc1285c300fbee13523bc")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        name: "update test",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("updatedCategory");
  });

  it("Should Throw category doesnt exist", async () => {
    const response = await supertest(app)
      .put("/api/categories/update/6659c755e6522df4b1ca0619")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        name: "update test",
      });

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });

    it("Should delete category", async () => {
      const response = await supertest(app)
        .delete("/api/categories/delete/660cc1ba3bb96ca31fb3ffd8")
        .set("Authorization", `Bearer ${jwtToken}`)
        .accept("");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("success");
      expect(response.body).toHaveProperty("message");
    });

  it("Should Throw category Not found", async () => {
    const response = await supertest(app)
      .delete("/api/categories/delete/660cb75d7b4e3d76d38592a0")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});
