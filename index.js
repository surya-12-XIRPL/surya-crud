// index.js


const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;

app.use(express.json());
app.use("/users", require("./routes/userroute"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

