import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import videoRoutes from "./routes/videos.routes";

const app = express();

let PORT = process.env.PORT || 4000;

app.set("port", PORT);


app.use(express.static(path.join(__dirname, "../frontend/build")));


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(videoRoutes);

export default app;