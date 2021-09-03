import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import recipesRouters from "./routes/contents.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi, you get the API ?");
});

app.use("/api/masakan", recipesRouters);

app.listen(PORT, () => {
  console.log("server running on http://localhost:" + PORT);
});
