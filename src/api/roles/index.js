const express = require("express");
const router = express.Router();
const rolesService = require("../../services/rolesService");
const httpStatus = require("../../enums/httpStatus");

router.get("/", async (req, res, next) => {
  try {
    const data = await rolesService.getRoles();
    res.status(httpStatus.Ok).send({ data });
  } catch (err) {
    next(err);
  }
});

router.get("/:roleId", async (req, res, next) => {
  try {
    const data = await rolesService.getRoleById(parseInt(req.params.roleId));
    res.status(httpStatus.Ok).send({ data });
  } catch (err) {
    next(err);
  }
});

router.get("/search/:value", async (req, res, next) => {
  try {
    const data = await rolesService.getRolesBySearch(req.params.value);
    res.status(httpStatus.Ok).send({ data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
