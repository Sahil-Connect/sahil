import { Router } from "express";

import users from "../users/router";

const router = Router();

router.use("/users", users);

export default router;