const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen("localhost:8080", () => console.log("listing on port 8080"));
