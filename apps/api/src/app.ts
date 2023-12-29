import * as dotenv from "dotenv";
const express = require("express");
export const app = express();
import { databaseURL } from "./config";
import { init } from "./init";
import connect from "./db";

dotenv.config();
const connection = connect(databaseURL);

/** initialize middleware */
init(app);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });
