const express = require("express");
const mongoose = require("mongoose");
const app = express();
let port = 23000;
app.get("/sri-eshwar", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Sri Eshwar college of engineering",
  });
});
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
