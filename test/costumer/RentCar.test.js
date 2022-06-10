const request = require("supertest");
const app = require("../../app");

 describe("POST /v1/cars/:id/rent", () => {
  it("should response with 201 as status code", async () => {
    const rentStartedAt="2022-03-07"
    const rentEndedAt="2022-03-07"
    return request(app)
      .post("/v1/cars/8/rent")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InRhc3lhIiwiZW1haWwiOiJ0YXN5YUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjU0ODc3NjM1fQ.fF1FnkFbdRtaKSAVtNreYQ0AGOkYEvv94IrkXvO3S4w"}`)
      .set("Content-Type", "application/json")
      .send({rentStartedAt,rentEndedAt})
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
        

      });
      
  }
  
  ,300000);

   it("should response with 500 as status code", async () => {
     const rentStartedAt="2022-08-08"
     return request(app)
       .post("/v1/cars/-9/rent")
       .set('Authorization', `Bearer ${
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsIm5hbWUiOiJtYWdkYWxpc2EiLCJlbWFpbCI6Im1hZ2RhbGlzYUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjU0ODg2MjE5fQ.Pk_R5-6_WVSePymJuJFTVikH08Dxv3HEroRkcXSnffw"}`)
       .set("Content-Type", "application/json")
       .send({rentStartedAt})
       .then((res) => {
         expect(res.statusCode).toBe(500);
         expect(res.body).toEqual(
           expect.objectContaining({
             ...res.body,
           })
         );
         
 
       },300000);
       
   }
   
   );
   it("should response with 422 as status code", async () => {
      const rentStartedAt="2022-08-08"
      const rentEndedAt="2022-08-08"
      return request(app)
        .post("/v1/cars/4/rent")
        .set('Authorization', `Bearer ${
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsIm5hbWUiOiJtYWdkYWxpc2EiLCJlbWFpbCI6Im1hZ2RhbGlzYUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjU0ODg2MjE5fQ.Pk_R5-6_WVSePymJuJFTVikH08Dxv3HEroRkcXSnffw"}`)
        .set("Content-Type", "application/json")
        .send({rentStartedAt,rentEndedAt})
        .then((res) => {
          expect(res.statusCode).toBe(422);
          expect(res.body).toEqual(
            expect.objectContaining({
              ...res.body,
            })
          );
          
  
        });
        
    }
    
    );
   },300000);

