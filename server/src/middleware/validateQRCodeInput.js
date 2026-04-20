export const validateQRCodeInput = (req, res, next) => {
  const { content, qrName } = req.body;
  if (!content || !qrName)
    return res.status(400).json({ msg: "URL or Qr Name is not specfied" });
  next();
};

export const validateProductQRCodeInput = (req, res, next) => {
  const { prod_id, prod_name, prod_type } = req.body;
  if (!prod_id || !prod_name || !prod_type)
    return res.status(400).json({ msg: "Please enter all details" });
  next();
};
