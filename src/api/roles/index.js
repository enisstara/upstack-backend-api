const express = require("express");
const router = express.Router();
const rolesService = require("../../services/rolesService");
const httpStatus = require("../../enums/httpStatus");

router.get("/", (req, res) => {
  try {
    const data = rolesService.getRoles();
    res.status(httpStatus.Ok).send({ data });
  } catch (e) {
    console.error("Error:", e.message);
    res.status(httpStatus.ServerError).send("Something went wrong!");
  }
});

router.get("/:roleId", (req, res) => {
  try {
    const data = rolesService.getRoleById(parseInt(req.params.roleId));
    res.status(httpStatus.Ok).send({ data });
  } catch (e) {
    console.error("Error:", e.message);
    res.status(httpStatus.ServerError).send("Something went wrong!");
  }
});

router.get("/search/:value", (req, res) => {
  try {
    const data = rolesService.getRolesBySearch(req.params.value);
    res.status(httpStatus.Ok).send({ data });
  } catch (e) {
    console.error("Error:", e.message);
    res.status(httpStatus.ServerError).send("Something went wrong!");
  }
});

module.exports = router;
