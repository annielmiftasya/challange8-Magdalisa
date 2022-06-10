const request = require("supertest");
const app = require("../../app");

 describe("POST /v1/cars", () => {
  it("should response with 201 as status code", async () => {
    const name = "Avanza"
    const price=30000
    const size ="medium"
    const image ="dummy"

    return request(app)
      .post("/v1/cars")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWF5YW1heWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IkFETUlOIn0sImlhdCI6MTY1NDc2OTYyNX0.fdj6bOXNRVCKrypHrCbYNn6qoKFPUERqs14ysh9Vbbk"}`)
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
  
  );

  

  it("should response with 422 as status code", async () => {
    const name = [];
    const prompt = {};

    return request(app)
      .post("/v1/cars")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWF5YW1heWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IkFETUlOIn0sImlhdCI6MTY1NDc2OTYyNX0.fdj6bOXNRVCKrypHrCbYNn6qoKFPUERqs14ysh9Vbbk"}`)
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
});
