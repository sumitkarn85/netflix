import express from "express";
// const express = require("express");
const app = express();

// to make app understand json
app.use(express.json());
let movieList = [];
// routes
app.get("/say-hello", (req, res) => {
  return res.status(200).send("hello");
});

// add movie
app.post("/movie/add", (req, res) => {
  // extract new movie from req.body
  const newMovie = req.body;
  // add new movie to movieList
  movieList.push(newMovie);
  console.log(movieList);
  // send response
  return res.status(200).send({ message: "movie is added successfully." });
});

app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "success", movie: movieList });
});

app.delete("/movie/delete", (req, res) => {
  return res.status(200).send({ message: "deleted" });
});
// network port and server
const PORT = 8001;

app.listen(PORT, function () {
  console.log(`app is listening port ${PORT}`);
});
