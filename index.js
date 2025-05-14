// index.js

const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;

app.use(express.json());
app.use("/users", require("./routes/userroute"));

// Tambahkan route untuk menampilkan "Hello World"
app.get("/", (req, res) => {
  res.send("Hello Fadhil Surya Buana");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));