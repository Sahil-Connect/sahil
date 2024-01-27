import { Router } from "express";

import businesses from "../businesses/router";
import notifications from "../notifications/router";
import orders from "../orders/router";
import users from "../users/router";

const router = Router();

router.use("/businesses", businesses);
router.use("/notifications", notifications);
router.use("/orders", orders);
router.use("/users", users);

export default router;
