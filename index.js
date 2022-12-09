// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("tracuusaubenh-Thấu hiểu cây trồng");
// });

// const port = 5000;
// app.listen(port, () => console.log(`Connect successfully to ${port}!`));

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");

//ham ket noi db
const connectDB = require("./config/db.config.js");

//import cac router
const UserRouter = require("./src/routes/user.route.js");
const CropRouter = require("./src/routes/crop.route.js");
const QuestionRouter = require("./src/routes/question.route.js");
const AnwserRouter = require("./src/routes/anwser.route.js");
const PestRouter = require("./src/routes/pest.route.js");
const PesticideRouter = require("./src/routes/pesticide.route.js");
const PostRouter = require("./src/routes/post.route.js");
const AdminRouter = require("./src/routes/admin.route.js");

const app = express();
dotenv.config({ path: ".env" });

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(cors());
app.use("/api/users", UserRouter);
app.use("/api/crop", CropRouter);
app.use("/api/question", QuestionRouter);
app.use("/api/answer", AnwserRouter);
app.use("/api/pest", PestRouter);
app.use("/api/pesticide", PesticideRouter);
app.use("/api/post", PostRouter);
app.use("/api/admin", AdminRouter);

app.get("/", (req, res) => {
  res.send("tracuusaubenh-Thấu hiểu cây trồng");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connect successfully to ${port}!`));
