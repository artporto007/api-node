import dotenv from "dotenv";
import express from "express";
import { selectUsuarios } from "./bd.js";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    nome: "Seu_nome_completo",
  });
  console.log("Rota / solicitada");
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await selectUsuarios();

  res.json(usuarios);
  console.log("Rota /usuarios solicitada");
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

// . fazer o deploy para a vercelll https://www.youtube.com/watch?v=K_DyE6TdaSc   https://www.youtube.com/watch?v=r3Kld-3aVWo
// acho que ainda dá pra fazer a parte de utilizar o import ao invés do require
