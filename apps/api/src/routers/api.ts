import { Router } from "express";

import businesses from "../businesses/router";
import notifications from "../notifications/router";
import orders from "../orders/router";
import users from "../users/router";
import suppliers from "../suppliers/router";
import auth from "../auth/router";

const router = Router();

router.use("/auth", auth);
router.use("/businesses", businesses);
router.use("/notifications", notifications);
router.use("/orders", orders);
router.use("/users", users);
router.use("/suppliers", suppliers);

export default router;
