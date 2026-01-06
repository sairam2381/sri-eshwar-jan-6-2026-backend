const express = require("express");
const {
  getAdmindetails,
  postAdmindetails,
  deleteAdminDetails,
  updateDetails,
} = require("../api-function/basic-project-function");
// Z
const router = express.Router();
router.get("/get-admin-datas", getAdmindetails);
router.post("/post-admin-details", postAdmindetails);
router.delete("/delete-admin-details/:id", deleteAdminDetails);
router.put("/update-details/:id", updateDetails);
module.exports = router;
