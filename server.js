import express from "express";
import barbieRoutes from "./routes/barbieRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("🎀 Servidor funcionando...");
});

app.use("/barbies", barbieRoutes);
const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
    console.log(`💅 Servidor rodando em http://localhost:${serverPort}`);
});