const express = require("express");
const app = express();
const db = require("./db/connection");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

// db connection
db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso!");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar:", err);
  });

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
