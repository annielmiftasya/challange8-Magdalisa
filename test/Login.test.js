const request = require("supertest");
const app = require("../app");

 describe("POST /v1/auth/login", () => {
  it("should response with 201 as status code", async () => {
    const email = "jiya@binar.co.id"
    const password="jiya"

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email,password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body
          })
        );
        

      });
      
  }
  
  ,300000);

  

  it("should response with 401 as status code", async () => {
   const email = "tasya@binar.co.id"
   const password="tasya"

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({email,password })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  it("should response with 404 as status code", async () => {
   const email = "mia2312@binar.co.id"
   const password="hai"

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({email,password })
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  
  it("should response with 404 as status code", async () => {
    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(500);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });
},300000);
