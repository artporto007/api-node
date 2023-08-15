import dotenv from "dotenv";
import express, { json } from "express";
import {
  selectUsuario,
  selectUsuarios,
  insertUsuario,
  deleteUsuario,
  updateUsuario,
} from "./bd.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Rota GET / solicitada");
  res.json({
    nome: "Arthur Faria Porto",
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

app.get("/usuario/:id", async (req, res) => {
  console.log("Rota GET /usuario solicitada");
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ message: "Usuário não encontrado!" });
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

app.patch("/usuario", async (req, res) => {
  console.log("Rota PATCH /usuario solicitada");
  try {
    const usuario = await selectUsuario(req.body.id);
    if (usuario.length > 0) {
      await updateUsuario(req.body);
      res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    console.log(error);
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

// Referências
// https://www.youtube.com/watch?v=K_DyE6TdaSc  https://youtube.com/playlist?list=PL-cC6RUnFTfM220OhC7SB-agFC19s4BAP https://www.youtube.com/watch?v=r3Kld-3aVWo

// Próximos passos
// # Refatorar o código
// ## Usar o router https://www.youtube.com/watch?v=9XtXkMkpQOM&list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2&index=6
// ### Pra isso tirar a rota usuarios e ficar somente com usuario
// #### Colocar um if dentro do get? pra verificar se tem o parametro
// ## Colocar a pasta src
// # Autorização https://www.youtube.com/watch?v=IVMccb2h9dw https://www.youtube.com/watch?v=Tw5LupcpKS4
// # MVC? Como colocar o controller https://www.youtube.com/watch?v=zMt2gwkK3xs&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn&index=12
