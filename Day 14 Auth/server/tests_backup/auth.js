import supertest from "supertest";
import mongoose from "mongoose";
import User from "../models/user.js";
import app from "../index.js";

beforeAll(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ashish1322:kuv58Hn5kFsFTznH@cluster0.88yqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Test Db Connected");
  } catch (err) {
    console.log("Test DB not Connected : ", err.message);
  }
});

beforeEach(async () => {
  await User.deleteMany({});
});

describe("Singup Test Cases", () => {
  it("Account shoule be created", async () => {
    const response = await supertest(app).post("/api/v1/auth/register").send({
      name: "Ashish",
      email: "a.m2002nov@gmail.com",
      password: "Ashsih123.#4#",
    });
    expect(response.status).toEqual(201);
  });
});
