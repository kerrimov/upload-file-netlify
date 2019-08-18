const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/download", function(req, res) {
  const file = `${__dirname}`;
  res.download(file);
});

app.listen(3000, () => {
  console.log("Server started...");
});
