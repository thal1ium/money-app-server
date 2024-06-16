import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router/router.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('', router);

function startServer() {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    })
  } catch (e) {
    throw new Error(e);
  }
}

startServer();