const request = require("supertest");
const app = require("../../app");
const err =require("../../app/errors/NotFoundError")
const { Car } = require("../../app/models");

describe("PUT /v1/cars/:id", () => {


    it("should response with 200 as status code", async () => {
    const name ="Hornet 4 Drive"
    const price = 300000
    const size="SMALL"
    const image= "https://source.unsplash.com/503x503"

    return request(app)
      .put("/v1/cars/3")
      .set('Authorization', `Bearer ${
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOm51bGwsImVtYWlsIjoiaml5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjU0ODc3OTMwfQ.sc6rP49q2ObNxh8Jz0mc2zAOtLyStqNH4Uwj77APDLM"}`)
      .set("Content-Type", "application/json")
      .send({name,price,size,image})
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
           ...res.body
          })
        );
      });
  },100000);

  it("should response with 404 as status code", async () => {
   const name ="Hornet 4 Drive"
   const price = 300000
   const size="SMALL"
   const image= "https://source.unsplash.com/503x503"
   const isCurrentlyRented=false

    return request(app)
      .put("/v1/cars/-100")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOm51bGwsImVtYWlsIjoiaml5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjU0ODc3OTMwfQ.sc6rP49q2ObNxh8Jz0mc2zAOtLyStqNH4Uwj77APDLM"}`)
      .set("Content-Type", "application/json")
      .send({ name,price,size,image,isCurrentlyRented })
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(
          expect.objectContaining({
          ...res.body
          })
        );
      });
  });

},100000);
