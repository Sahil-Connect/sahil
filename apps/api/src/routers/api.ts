import { Router } from "express";

import orders from "../orders/router";
import users from "../users/router";

const router = Router();

router.use("/orders", orders);
router.use("/users", users);

export default router;