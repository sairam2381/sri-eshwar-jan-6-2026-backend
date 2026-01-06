const express = require("express");
const database = require("./db-connect/db");
const basicProjects = require("./routes/basic-projects");
const app = express();
let port = 23000;
database.connectFunction();
app.use(express.json());
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
