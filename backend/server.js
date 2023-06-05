require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todos");

// express app
const app = express();

// constants
const { PORT, MONG_URI } = process.env;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// routes
app.use("/api/todos", todoRoutes);

// connect to DB
mongoose
  .connect(MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`connected to DB & listeneing on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
