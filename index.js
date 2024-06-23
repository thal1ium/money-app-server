import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router/router.js";
import sequelize from "./config/database.js";
import xssClean from "xss-clean";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('', router);
app.use(xssClean());

function startServer() {
    sequelize.sync().then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    }).catch(error => {
        console.error('Unable to connect to the database:', error);
    });
}

startServer();