import { Router } from "express";

import qrCodeRoute from "./qrRoutes.js";

const router = Router();

router.use("/qrCode", qrCodeRoute);

export default router;
