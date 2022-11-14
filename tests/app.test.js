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

  it("GET /api/v1/employees/1 --> should respond with json", (done) => {
    supertest(app)
      .get("/api/v1/employees/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok, done)
  });

  it("GET /api/v1/employees/404999 --> should respond with [] if not found", (done) => {
    supertest(app)
      .get("/api/v1/employees/404999")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok)
      .expect((response) => {
        expect(response.body.data.length).toEqual(0)
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  it("GET /api/v1/employees/search/term --> should respond with json", (done) => {
    supertest(app)
      .get("/api/v1/employees/search/term")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok, done);
  });

  it("GET /api/v1/search/0 --> should respond with [] if not found", (done) => {
    supertest(app)
      .get("/api/v1/employees/search/0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok)
      .expect((response) => {
        expect(response.body.data.length).toEqual(0)
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("Roles API", () => {
  it("GET /api/v1/roles --> should respond with json", (done) => {
    supertest(app)
      .get("/api/v1/roles")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok, done);
  });

  it("GET /api/v1/roles/1 --> should respond with json", (done) => {
    supertest(app)
      .get("/api/v1/roles/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok, done)
  });

  it("GET /api/v1/roles/404999 --> should respond with [] if not found", (done) => {
    supertest(app)
      .get("/api/v1/roles/404999")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok)
      .expect((response) => {
        expect(response.body.data.length).toEqual(0)
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  it("GET /api/v1/roles/search/term --> should respond with json", (done) => {
    supertest(app)
      .get("/api/v1/roles/search/term")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok, done);
  });

  it("GET /api/v1/roles/0 --> should respond with [] if not found", (done) => {
    supertest(app)
      .get("/api/v1/roles/search/0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(HttpStatus.Ok)
      .expect((response) => {
        expect(response.body.data.length).toEqual(0)
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});