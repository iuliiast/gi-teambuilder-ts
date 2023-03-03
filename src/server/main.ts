import cors from "cors";
import express from "express";
import ViteExpress from "vite-express";
import { routerIndex } from "../../routers/router.index";
const app = express();
const port: any = process.env.PORT || 3000;

app.use(cors());
app.get("/hello", (_, res) => {
	res.send("Hello Vite + React + TypeScript!");
});
app.use(express.static("/"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/data", express.static("./data"));
app.use("/images", express.static("./images"));
app.use("/", routerIndex);

ViteExpress.listen(app, port, () =>
	console.log(`Server is listening on port ${port}...`)
);
