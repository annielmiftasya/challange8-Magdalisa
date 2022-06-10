const request = require("supertest");
const app = require("../app");
const { Car } = require("../app/models");

describe("GET /v1/cars/:id", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/cars/10")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  },300000);

  it("should response with 404 as status code", async () => {
    return request(app)
      .get("/cars/-100")
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });
},300000);
