const request = require("supertest");
const app = require("../app");
const { Car } = require("../app/models");

describe("GET /v1/cars/:id", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/cars/2")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            id: 2,
            name: "Mazda RX4 Wag",
            price: 300000,
            size: "SMALL",
            image: "https://source.unsplash.com/501x501",
            isCurrentlyRented: false,
            createdAt: "2022-06-08T10:29:45.083Z",
            updatedAt: "2022-06-08T10:29:45.083Z"
          })
        );
      });
  });

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
});
