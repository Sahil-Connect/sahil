import { Router } from "express";

import orders from "../orders/router";
import users from "../users/router";
import notifications from "../notifications/router";

const router = Router();

router.use("/orders", orders);
router.use("/users", users);
router.use("/notifications", notifications);

export default router;
