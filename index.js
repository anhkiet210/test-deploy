import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("tracuusaubenh-Thấu hiểu cây trồng");
});

const port = 5000;
app.listen(port, () => console.log(`Connect successfully to ${port}!`));
