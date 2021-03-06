const request = require("supertest");
const app = require("../app");

 describe("POST /v1/auth/register", () => {
  it("should response with 201 as status code", async () => {
    const email = "kpayana@binar.co.id"
    const password="payana"
    const name="payana"

    return request(app)
      .post("/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ email,password,name})
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

  

  it("should response with 422 as status code", async () => {
   const email = "tasya@binar.co.id"
   const password="tasya"
   const name="miya"

    return request(app)
      .post("/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({email,password,name})
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });
},300000);
