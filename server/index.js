const express = require("express");
const cors = require("cors");
const movies = require("./db.json");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  await res.send(movies);
});

app.post("/create", async (req, res) => {
  try {
    movies.push(req.body);
    res.send(movies);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server is listening");
});
