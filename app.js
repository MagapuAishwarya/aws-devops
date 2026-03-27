const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Aishwarya 🚀 AWS DevOps Working!");
});

app.listen(3000, () => console.log("Server running"));