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

  it("Should Get All Posts ", async () => {
    const response = await supertest(app)
      .get("/api/blog/allposts")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("posts");
  });

  it("Should Get Post By Id ", async () => {
    const response = await supertest(app)
      .get("/api/blog/post/6609c7f949f913b83b67d001")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("post");
  });

  it("Should throw Post not found ", async () => {
    const response = await supertest(app)
      .get("/api/blog/post/6609c755e6522df4b1ca0619")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send();

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });

  //   it("Should create a new post ", async () => {
  //     const response = await supertest(app)
  //       .post("/api/blog/create")
  //       .set("Authorization", `Bearer ${jwtToken}`)
  //       .accept("")
  //       .send({
  //         title: "test",
  //         postPicture: "test.png",
  //         content: "<p>test</p>",
  //       });

  //     expect(response.status).toBe(201);
  //     expect(response.body).toHaveProperty("success");
  //     expect(response.body).toHaveProperty("post");
  //   });

  it("Should Update Post ", async () => {
    const response = await supertest(app)
      .put("/api/blog/update/660cbc183b381533cc0a6fdf")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        postPicture: "Update test.png",
        content: "<p>Update test</p>",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("updatedPost");
  });

  it("Should Update Post (partial)", async () => {
    const response = await supertest(app)
      .put("/api/blog/update/660cbc183b381533cc0a6fdf")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        title: "Update test",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("updatedPost");
  });

  it("Should Catch Error", async () => {
    const response = await supertest(app)
      .put("/api/blog/update/6609c755e6522df4b1ca0619")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("")
      .send({
        title: "Update test",
      });

    expect(response.status).toBe(500);
  });

  // it("Should delete Product", async () => {
  //   const response = await supertest(app)
  //     .delete("/api/blog/delete/660cbd048135ba6bc7b60647")
  //     .set("Authorization", `Bearer ${jwtToken}`)
  //     .accept("");

  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty("success");
  //   expect(response.body).toHaveProperty("message");
  // });

  it("Should Throw Post Not found", async () => {
    const response = await supertest(app)
      .delete("/api/blog/delete/660cbd32ae7718b17f2945c9")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });

  it("Should Like A Post", async () => {
    const response = await supertest(app)
      .patch("/api/blog/like/6609c7f949f913b83b67d001")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('post');
  });

  it("Should Throw Post dont exist", async () => {
    const response = await supertest(app)
      .patch("/api/blog/like/660cbd32ae7718b17f2945c9")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({})
  });

  it("Should UnLike A Post", async () => {
    const response = await supertest(app)
      .patch("/api/blog/unlike/6609c7f949f913b83b67d001")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('post');
  });

  it("Should Throw Post dont exist", async () => {
    const response = await supertest(app)
      .patch("/api/blog/unlike/660cbd32ae7718b17f2945c9")
      .set("Authorization", `Bearer ${jwtToken}`)
      .accept("");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({})
  });
});
