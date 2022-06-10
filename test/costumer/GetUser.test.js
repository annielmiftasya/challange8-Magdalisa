const request = require("supertest");
const app = require("../../app");

 describe("GET /v1/auth/whoami", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/auth/whoami")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsIm5hbWUiOiJtYWdkYWxpc2EiLCJlbWFpbCI6Im1hZ2RhbGlzYUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjU0ODg2MjE5fQ.Pk_R5-6_WVSePymJuJFTVikH08Dxv3HEroRkcXSnffw"}`)
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
  
  ,3000000);

  

  // it("should response with 401 as status code", async () => {
  //   return request(app)
  //     .get("/v1/auth/whoami")
  //     .set('Authorization', `Bearer ${
  //       ""}`)
  //     .set("Content-Type", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOm51bGwsImVtYWlsIjoiaml5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjU0ODc3OTMwfQ.sc6rP49q2ObNxh8Jz0mc2zAOtLyStqNH4Uwj77APDLM")
  //     .then((res) => {
  //       expect(res.statusCode).toBe(401);
  //       expect(res.body).toEqual(
  //         expect.objectContaining({
  //           ...res.body,
  //         })
  //       );
  //     });
  // },300000);

  it("should response with 401 as status code", async () => {
    return request(app)
      .get("/v1/auth/whoami")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOm51bGwsImVtYWlsIjoiaml5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjU0ODc3OTMwfQ.sc6rP49q2ObNxh8Jz0mc2zAOtLyStqNH4Uwj77APDLM"}`)
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
},3000000);
