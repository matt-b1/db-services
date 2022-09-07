const express = require("express");
const app = express();
const cors = require("cors");
const dogsRoutes = require("./routes/dogs")

app.use(cors());
app.use('/dogs', dogsRoutes);

app.get('/', (req, res) => {
  res.send(process.env.PGPORT)
})

module.exports = app;
