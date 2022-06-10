const request = require("supertest");
const app = require("../../app");

 describe("GET /v1/auth/whoami", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/auth/whoami")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm5hbWUiOiJtYXlhIiwiZW1haWwiOiJtYXlhQGJpbmFyLmNvLmlkIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NTQ4NzI3MDR9.CJ_L_-h_4LxwtLW-fmKRmSCnW7ifj6TufYkJ7eGlJUk"}`)
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
  
  );

  

  it("should response with 401 as status code", async () => {
    return request(app)
      .get("/v1/auth/whoami")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5CI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWF5YW1heWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IkFETUlOIn0sImlhdCI6MTY1NDc2OTYyNX0.fdj6bOXNRVCKrypHrCbYNn6qoKFPUERqs14ysh9Vbbk"}`)
      .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  it("should response with 401 as status code", async () => {
    return request(app)
      .get("/v1/auth/whoami")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWF5YW1heWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IkFETUlOIn0sImlhdCI6MTY1NDc2OTYyNX0.fdj6bOXNRVCKrypHrCbYNn6qoKFPUERqs14ysh9Vbbk"}`)
      .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });
});
