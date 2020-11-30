const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  console.log('⛔Uncaught Exception. Shutting Down Sever⛔');
  process.exit(1);
})

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB Connected");
  });

const port = 3300;
const server = app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('⛔Unhandled Rejecttion.Shutting Down Sever⛔');
  server.close(()=>{
    process.exit(1);
  })
})

