const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Port is running",
  });
});
