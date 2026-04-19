export const validateQRCodeInput = (req, res, next) => {
  const { content, qrName } = req.body;
  if (!content ||  !qrName)
    return res.status(400).json({ msg: "URL or Qr Name is not specfied" });
  next();
};
