const express = require("express");
const router = express.Router();
const employeeService = require("../../services/employeeService");
const httpStatus = require("../../enums/httpStatus");

router.get("/", (req, res) => {
  try {
    const data = employeeService.getEmployees();
    res.status(httpStatus.Ok).send({ data });
  } catch (e) {
    console.error("Error:", e.message);
    res.status(httpStatus.ServerError).send("Something went wrong!");
  }
});

router.get("/:employeeId", (req, res) => {
  try {
    const data = employeeService.getEmployeeById(parseInt(req.params.employeeId));
    res.status(httpStatus.Ok).send({ data });
  } catch (e) {
    console.error("Error:", e.message);
    res.status(httpStatus.ServerError).send("Something went wrong!");
  }
});

router.get("/search/:value", (req, res) => {
  try {
    const data = employeeService.getEmployeesBySearch(req.params.value);
    res.status(httpStatus.Ok).send({ data });
  } catch (e) {
    console.error("Error:", e.message);
    res.status(httpStatus.ServerError).send("Something went wrong!");
  }
});

module.exports = router;
