const express = require("express");
const router = express.Router();
const employeeService = require("../../services/employeeService");
const httpStatus = require("../../enums/httpStatus");

router.get("/", async (req, res, next) => {
  try {
    const data = await employeeService.getEmployees();
    res.status(httpStatus.Ok).send({ data });
  } catch (err) {
    next(err);
  }
});

router.get("/:employeeId", async (req, res, next) => {
  try {
    const data = await employeeService.getEmployeeById(parseInt(req.params.employeeId));
    res.status(httpStatus.Ok).json({ data });
  } catch (err) {
    next(err);
  }
});

router.get("/search/:value", async (req, res, next) => {
  try {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const value = req.params.value;
    console.log(format.test(value));

    const data = await employeeService.getEmployeesBySearch(req.params.value);
    res.status(httpStatus.Ok).send({ data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
