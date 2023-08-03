import dotenv from "dotenv";
import express, { json } from "express";
import { selectUsuarios, insertUsuario, deleteUsuario } from "./bd.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Rota GET / solicitada");
  res.json({
    nome: "Seu_nome_completo",
  });
});

app.get("/usuarios", async (req, res) => {
  console.log("Rota GET /usuarios solicitada");
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.post("/usuario", async (req, res) => {
  console.log("Rota POST /usuario solicitada");
  try {
    await insertUsuario(req.body);
    res.status(201).json({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.delete("/usuario/:id", async (req, res) => {
  console.log("Rota DELETE /usuario solicitada");

  try {
    await deleteUsuario(req.params.id);
    res.status(200).json({ message: "Usuário excluido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

// . fazer o deploy para a vercelll https://www.youtube.com/watch?v=K_DyE6TdaSc  https://youtube.com/playlist?list=PL-cC6RUnFTfM220OhC7SB-agFC19s4BAP https://www.youtube.com/watch?v=r3Kld-3aVWo
// acho que ainda dá pra fazer a parte de utilizar o import ao invés do require
