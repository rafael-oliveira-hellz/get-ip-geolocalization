import express, { json } from "express";
import api from "./api/index";

const app = express();

app.use(json({ extended: false }));

app.use("/api", api);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));