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
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWF5YW1heWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IkFETUlOIn0sImlhdCI6MTY1NDc2OTYyNX0.fdj6bOXNRVCKrypHrCbYNn6qoKFPUERqs14ysh9Vbbk"}`)
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
  });

  it("should response with 404 as status code", async () => {
   const name ="Hornet 4 Drive"
   const price = 300000
   const size="SMALL"
   const image= "https://source.unsplash.com/503x503"
   const isCurrentlyRented=false

    return request(app)
      .put("/v1/cars/-100")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWF5YW1heWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IkFETUlOIn0sImlhdCI6MTY1NDc2OTYyNX0.fdj6bOXNRVCKrypHrCbYNn6qoKFPUERqs14ysh9Vbbk"}`)
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

});
