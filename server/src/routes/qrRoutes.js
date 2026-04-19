import { Router } from "express";

import QRCode from "qrcode";
import { validateQRCodeInput } from "../middleware/validateQRCodeInput.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to QR Code Generator" });
});

router.post("/link", validateQRCodeInput, async (req, res) => {
  const { content } = req.body;

  // TODO: REMOVE "!qrCode" from validateQRCodeInput middleware
  try {
    const qrString = await QRCode.toString(content);
    res.status(200).json({
      msg: "QR Code Generated",
    });
    console.log(qrString);
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to generate QR Code" });
  }
});

router.post("/save-qr", validateQRCodeInput, async (req, res) => {
  const { content, qrName } = req.body;
  try {
    const qrFile = await QRCode.toFile(`../img/${qrName}.png`, content, {
      color: {
        light: "#0000",
        dark: "#fff",
      },
    });
    res.status(200).json({ msg: "QR Code Saved" });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to generate QR Code" });
  }
});

export default router;
