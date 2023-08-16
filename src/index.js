import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/users.js";
import loginRouter from "./routes/login.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(loginRouter);

app.get("/", (req, res) => {
  console.log("Rota GET / solicitada");
  res.json({
    nome: "Arthur Faria Porto",
  });
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
// ## Colocar a pasta src
// # Autorização #1 https://www.youtube.com/watch?v=D0gpL8-DVrc https://www.youtube.com/watch?v=IVMccb2h9dw https://www.youtube.com/watch?v=Tw5LupcpKS4
// # MVC? Como colocar o controller https://www.youtube.com/watch?v=zMt2gwkK3xs&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn&index=12

// Criar um middleware para verificar se tem um token
// Se tiver um token dá o next() se não manda fazer o login.
