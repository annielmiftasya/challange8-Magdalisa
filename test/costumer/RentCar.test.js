const request = require("supertest");
const app = require("../../app");

 describe("POST /v1/cars", () => {
  it("should response with 201 as status code", async () => {
    const rentStartedAt="2022-12-27"
    const rentEndedAt="2022-12-27"
    return request(app)
      .post("/v1/cars/1/rent")
      .set('Authorization', `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm5hbWUiOiJtYXlhIiwiZW1haWwiOiJtYXlhQGJpbmFyLmNvLmlkIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NTQ4NzI3MDR9.CJ_L_-h_4LxwtLW-fmKRmSCnW7ifj6TufYkJ7eGlJUk"}`)
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
  
  );

   it("should response with 500 as status code", async () => {
     const rentStartedAt="2022-08-08"
     return request(app)
       .post("/v1/cars/-9/rent")
       .set('Authorization', `Bearer ${
         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hbWUiOiJ0YXN5YSIsImVtYWlsIjoidGFzeWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkNVU1RPTUVSIn0sImlhdCI6MTY1NDgyMjUzMn0.urPU1Ys60msjSTw3Q6catJZ7UNXhrozjlDKwJzjzf7A"}`)
       .set("Content-Type", "application/json")
       .send({rentStartedAt})
       .then((res) => {
         expect(res.statusCode).toBe(500);
         expect(res.body).toEqual(
           expect.objectContaining({
             ...res.body,
           })
         );
         
 
       });
       
   }
   
   );
   it("should response with 422 as status code", async () => {
      const rentStartedAt="2022-08-08"
      const rentEndedAt="2022-08-08"
      return request(app)
        .post("/v1/cars/4/rent")
        .set('Authorization', `Bearer ${
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hbWUiOiJ0YXN5YSIsImVtYWlsIjoidGFzeWFAYmluYXIuY28uaWQiLCJpbWFnZSI6bnVsbCwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkNVU1RPTUVSIn0sImlhdCI6MTY1NDgyMjUzMn0.urPU1Ys60msjSTw3Q6catJZ7UNXhrozjlDKwJzjzf7A"}`)
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
   });

