import { Router } from "express";

import orders from "../orders/router";
import users from "../users/router";
import subscribe from "../subscribe/router";

const router = Router();

router.use("/orders", orders);
router.use("/users", users);
router.use("/subscribe", subscribe);

export default router;