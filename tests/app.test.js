const supertest = require("supertest");
const app = require("../src/app");
const HttpStatus = require("../src/enums/httpStatus");

describe("Employees API", () => {
  it("GET /api/v1/employees --> should respond with json", (done) => {
    supertest(app)
      .get("/api/v1/employees")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok, done);
  });
});
