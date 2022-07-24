import express from "express";

const PORT = 8080;

const app = express();

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.clear();
  console.group(`Server - Port ${PORT}`);
  console.log(`Server Listening On Port ${PORT}`);
  console.log("type rs to reload server");
  console.groupEnd();
});
