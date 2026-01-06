const express = require("express");
const { getAdmindetails } = require("../api-function/basic-project-function");
// Z
const router = express.Router();
router.get("/get-admin-datas", getAdmindetails);
router.post("/post-admin-details");
module.exports = router;
