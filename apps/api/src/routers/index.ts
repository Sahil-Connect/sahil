import * as express from "express";

import api from "./api";
import home from "./home";

const router = express.Router();

router.use("/api", api);
router.use("/", home)

export default router;
