const express = require("express")
require('dotenv').config()
const routes = require("./routes")

const app = express();

const PORT = 3000;

app.use(routes)

module.exports = () => {
  const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}.😊`);
    return server;
  });
};
