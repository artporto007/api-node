import dotenv from "dotenv";
import express, { json } from "express";
import { selectUsuarios, insertUsuario } from "./bd.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    nome: "Seu_nome_completo",
  });
  console.log("Rota GET / solicitada");
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await selectUsuarios();
  res.json(usuarios);
  console.log("Rota /usuarios solicitada");
});

app.post("/usuario", async (req, res) => {
  console.log("Rota POST /usuario solicitada");
  try {
    await insertUsuario(req.body);
    res.status(201).json({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ message: error.message || "Erro!" });
  }
});

// app.put("/usuario/:id", async (req, res) => {
//   console.log("Rota PUT /usuario solicitada");

//   const id = req.params.id;

//   res.status(200).json({ id: id });

//   // try {
//   //   const [id] = req.params;
//   //   await del(req.params);
//   //   res.status(200).json({ message: "Usuário excluido com sucesso!" });
//   // } catch (error) {
//   //   console.log(error);
//   //   return res
//   //     .status(error.status || 500)
//   //     .json({ message: error.message || "Erro!" });
//   // }
// });

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

// . fazer o deploy para a vercelll https://www.youtube.com/watch?v=K_DyE6TdaSc  https://youtube.com/playlist?list=PL-cC6RUnFTfM220OhC7SB-agFC19s4BAP https://www.youtube.com/watch?v=r3Kld-3aVWo
// acho que ainda dá pra fazer a parte de utilizar o import ao invés do require
