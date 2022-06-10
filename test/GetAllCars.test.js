const request = require("supertest");
const app = require("../app");

 describe("GET /v1/cars", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/cars")
      .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
        

      });
      
  }
  
  ,300000);

  

//   it("should response with 422 as status code", async () => {
//     const name = [];
//     const prompt = {};

//     return request(app)
//       .get("/v1/car")
//       .set("Content-Type", "application/json")
//       .send({ name, prompt })
//       .then((res) => {
//         expect(res.statusCode).toBe(200);
//         expect(res.body).toEqual(
//           expect.objectContaining({
//             cars: {
//               name: expect.any(String),
//               message: expect.any(String),
//             },
//           })
//         );
//       });
//   });
});
