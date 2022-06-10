const request = require("supertest");
const app = require("../../app");
const err=require("../../app/errors/ApplicationError")
describe("DELETE /v1/cars/:id", () => {
 it("should response with 200 as status code", async () => {
    return request(app)
      .delete("/v1/cars/118")
      .set('Authorization', `Bearer ${
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOm51bGwsImVtYWlsIjoiaml5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjU0ODgwMDUxfQ.LgwLvvf--9sMr1eI_fv5SfLMgb8VThxdp4bwiqFc7IU"}`)
       .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(204);
      });
  },20000);

  // it("should response with 404 as status code", async () => {
  //   return request(app)
  //     .delete("/v1/cars/-100")
  //     .set('Authorization', `Bearer ${
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWF5YW1heWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IkFETUlOIn0sImlhdCI6MTY1NDc2OTYyNX0.fdj6bOXNRVCKrypHrCbYNn6qoKFPUERqs14ysh9Vbbk"}`)
  //     .then((res) => {
  //       expect(res.statusCode).toBe(4);
  //       expect(res.body).toEqual(
  //         expect.objectContaining({
  //           error: {
  //              details: null,
  //              message: "jwt must be provided",
  //              name: "JsonWebTokenError",
  //           },
  //         })
  //       );
  //     });
  // });
});
