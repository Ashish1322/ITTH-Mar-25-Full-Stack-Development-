import supertest from "supertest";
import mongoose from "mongoose";
import User from "../models/user.js";
import app from "../index.js";

// beforeEach( () => {})
// beforeAll( () => {})

// afterAll( () => {})
// afterEach( () => {})

beforeAll(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ashish1322:kuv58Hn5kFsFTznH@cluster0.88yqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Test Db Connected");
    await User.deleteMany({});
  } catch (err) {
    console.log("Test DB not Connected : ", err.message);
  }
});

describe("Singup Process Test Cases", () => {
  it("Must create Account", async () => {
    const response = await supertest(app).post("/api/v1/auth/register").send({
      email: "a.m2002nov@gmail.com",
      password: "123456678",
      name: "Ashish Kumar",
      gender: "male",
    });
    expect(response.status).toEqual(201);
  });
  it("Duplicate email not allowed", async () => {
    const response = await supertest(app).post("/api/v1/auth/register").send({
      email: "a.m2002nov@gmail.com",
      password: "123456678",
      name: "Ashish Kumar",
      gender: "male",
    });
    expect(response.status).toEqual(400);
  });
});

describe("Login Test Cases", () => {
  it("Correct Email and Password", async () => {
    const response = await supertest(app).post("/api/v1/auth/login").send({
      email: "a.m2002nov@gmail.com",
      password: "123456678",
    });
    expect(response.status).toEqual(200);
  });
  it("Incorrect Email", async () => {
    const response = await supertest(app).post("/api/v1/auth/login").send({
      email: "a.m200nov@gmail.com",
      password: "123456678",
    });
    expect(response.status).toEqual(400);
  });
  it("Incorrect Password", async () => {
    const response = await supertest(app).post("/api/v1/auth/login").send({
      email: "a.m2002nov@gmail.com",
      password: "12345678",
    });
    expect(response.status).toEqual(400);
  });
});

describe("Group Test Caes", () => {
  it("Create Group", async () => {
    let response = await supertest(app).post("/api/v1/auth/login").send({
      email: "a.m2002nov@gmail.com",
      password: "123456678",
    });
    const authToken = response.body["accessToken"];
    response = await supertest(app)
      .post("/api/v1/group")
      .set("Authorization", authToken)
      .send({
        name: "Test Group",
      });
    expect(response.status).toEqual(201);
  });

  it("Get All Groups After Creating", async () => {
    let response = await supertest(app).post("/api/v1/auth/login").send({
      email: "a.m2002nov@gmail.com",
      password: "123456678",
    });
    const authToken = response.body["accessToken"];
    response = await supertest(app)
      .get("/api/v1/group")
      .set("Authorization", authToken);

    expect(response.status).toEqual(200);
    expect(response.body.groups.length).toEqual(1);
  });

  it("Delete a Group", async () => {
    // 1. login
    let response = await supertest(app).post("/api/v1/auth/login").send({
      email: "a.m2002nov@gmail.com",
      password: "123456678",
    });
    const authToken = response.body["accessToken"];

    // 2. get group id to delete
    response = await supertest(app)
      .get("/api/v1/group")
      .set("Authorization", authToken);
    groupId = response.body.groups[0]._id;

    // 3. Hit Delete API
    response = await supertest(app)
      .delete(`/api/v1/group/${groupId}`)
      .set("Authorization", authToken);

    expect(response.status).toEqual(200);
  });

  it("Get All Groups After Deletion", async () => {
    let response = await supertest(app).post("/api/v1/auth/login").send({
      email: "a.m2002nov@gmail.com",
      password: "123456678",
    });
    const authToken = response.body["accessToken"];
    response = await supertest(app)
      .get("/api/v1/group")
      .set("Authorization", authToken);

    expect(response.status).toEqual(200);
    expect(response.body.groups.length).toEqual(0);
  });
});
afterAll(() => {
  mongoose.disconnect();
});
