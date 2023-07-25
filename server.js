const express = require("express"); // Requisição do pacote do express
const app = express(); // Instancia o Express
const port = 3000; // Define a porta

app.get("/", (req, res) => {
  // Cria a rota da raiz do projeto
  res.json({
    nome: "Seu_nome_completo", // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

// . mudar no notion para colocar a vercel
// . colocar a configuração pra usar a url de conexão do post
