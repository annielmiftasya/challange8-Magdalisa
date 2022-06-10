const request = require("supertest");
const app = require("../../app");

 describe("POST /v1/cars", () => {
  it("should response with 201 as status code", async () => {
    const name = "Apv"
    const price=30000
    const size ="large"
    const image ="dummy"

    return request(app)
      .post("/v1/cars")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOm51bGwsImVtYWlsIjoiaml5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjU0ODgwMDUxfQ.LgwLvvf--9sMr1eI_fv5SfLMgb8VThxdp4bwiqFc7IU"}`)
      .set("Content-Type", "application/json")
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
            name, price, size, image
          })
        );
        

      });
      
  }
  
  ,100000);

  

  it("should response with 422 as status code", async () => {
    const name = [];
    const prompt = {};

    return request(app)
      .post("/v1/cars")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOm51bGwsImVtYWlsIjoiaml5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjU0ODc3OTMwfQ.sc6rP49q2ObNxh8Jz0mc2zAOtLyStqNH4Uwj77APDLM"}`)
      .set("Content-Type", "application/json")
      .send({ name, prompt })
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: expect.any(String),
              message: expect.any(String),
            },
          })
        );
      });
  });
},100000);
