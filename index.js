const express = require("express");
const cors = require("cors");
const database = require("./db-connect/db");
const basicProjects = require("./routes/basic-projects");
const app = express();
let port = 23000;
database.connectFunction();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/v1", basicProjects);
app.get("/sri-eshwar", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Sri Eshwar college of engineering",
  });
});
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
