import express from "express";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Generator" });
});
