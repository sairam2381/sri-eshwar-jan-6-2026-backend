const express = require("express");
const { getAdmindetails } = require("../api-function/basic-project-function");
const { model } = require("mongoose");
const router = express.Router();
router.get("/get-admin-datas", getAdmindetails);
model.exports = router;
