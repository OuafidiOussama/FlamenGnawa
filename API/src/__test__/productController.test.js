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

  it("Should Get All Products ", async () => {
    const response = await supertest(app)
      .get("/api/products/allProducts")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("products");
  });

//   it("Should Get Product By Id ", async () => {
//     const response = await supertest(app)
//       .get("/api/products/product/660c22fa7b642e419ecc204b")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send();

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("success");
//     expect(response.body).toHaveProperty("product");
//     expect(response.body).toHaveProperty("relatedProducts");
//   });

//   it("Should throw Producy not found ", async () => {
//     const response = await supertest(app)
//       .get("/api/products/product/6609c755e6522df4b1ca0619")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send();

//     expect(response.status).toBe(404);
//     expect(response.body).toEqual({});
//   });

//   it("Should create a new product ", async () => {
//     const response = await supertest(app)
//       .post("/api/products/create")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         label: "test",
//         description: "<p>test</p>",
//         brand: "test",
//         quantity: 11,
//         unitPrice: 11.11,
//         productPicture: "test.png",
//         category: "6609c755e6522df4b1ca0619",
//       });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty("success");
//     expect(response.body).toHaveProperty("product");
//   });

//   it("Should Throw category Not Found ", async () => {
//     const response = await supertest(app)
//       .post("/api/products/create")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         label: "test",
//         description: "<p>test</p>",
//         brand: "test",
//         quantity: 11,
//         unitPrice: 11.11,
//         productPicture: "test.png",
//         category: "65c8f7ae3aefedb46ff499d0",
//       });

//     expect(response.status).toBe(404);
//     expect(response.body).toEqual({});
//   });

//   it("Should Update Product ", async () => {
//     const response = await supertest(app)
//       .put("/api/products/update/660cb6e804d574fcd09945ca")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         label: "update test",
//         description: "<p>update test</p>",
//         brand: "update",
//         category: "6609c755e6522df4b1ca0619",
//       });

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("success");
//     expect(response.body).toHaveProperty("updatedProduct");
//   });

//   it("Should Update Product (partial)", async () => {
//     const response = await supertest(app)
//       .put("/api/products/update/660cb6e804d574fcd09945ca")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         quantity: 30,
//       });

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("success");
//     expect(response.body).toHaveProperty("updatedProduct");
//   });

//   it("Should Throw product doesnt exist", async () => {
//     const response = await supertest(app)
//       .put("/api/products/update/6609c755e6522df4b1ca0619")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         label: "update test",
//         description: "<p>update test</p>",
//         brand: "update",
//         category: "6609c755e6522df4b1ca0619",
//       });

//     expect(response.status).toBe(404);
//     expect(response.body).toEqual({});
//   });

//   it("Should Throw category Not Found", async () => {
//     const response = await supertest(app)
//       .put("/api/products/update/660cb6e804d574fcd09945ca")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")
//       .send({
//         label: "update test",
//         description: "<p>update test</p>",
//         brand: "update",
//         category: "65c8f7ae3aefedb46ff499d0",
//       });

//     expect(response.status).toBe(404);
//     expect(response.body).toEqual({});
//   });

//   it("Should delete Product", async () => {
//     const response = await supertest(app)
//       .delete("/api/products/delete/660cba3b13dcc36204c1fa91")
//       .set("Authorization", `Bearer ${jwtToken}`)
//       .accept("")

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("success");
//     expect(response.body).toHaveProperty("message");
//   });
  
  it("Should Throw Product Not found", async () => {
    const response = await supertest(app)
      .delete("/api/products/delete/660cb75d7b4e3d76d38592a0")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")

    expect(response.status).toBe(404);
    expect(response.body).toEqual({})
  });
});
