const express = require("express");
const {
  getAdmindetails,
  postAdmindetails,
  deleteAdminDetails,
} = require("../api-function/basic-project-function");
// Z
const router = express.Router();
router.get("/get-admin-datas", getAdmindetails);
router.post("/post-admin-details", postAdmindetails);
router.delete("/delete-admin-details/:id", deleteAdminDetails);
module.exports = router;
