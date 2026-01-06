const express = require("express");
const {
  getAdmindetails,
  postAdmindetails,
} = require("../api-function/basic-project-function");
// Z
const router = express.Router();
router.get("/get-admin-datas", getAdmindetails);
router.post("/post-admin-details", postAdmindetails);
module.exports = router;
