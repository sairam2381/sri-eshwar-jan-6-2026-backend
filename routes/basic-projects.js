const express = require("express");
const { getAdmindetails } = require("../api-function/basic-project-function");
// Z
const router = express.Router();
router.get("/get-admin-datas", getAdmindetails);
module.exports = router;
