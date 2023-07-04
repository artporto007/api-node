const express = require('express')      // Requisição do pacote do express
const app = express()                   // Instancia o Express
const port = 3000                       // Define a porta

app.get('/', (req, res) => {            // Cria a rota da raiz do projeto
    res.send('Seu_nome_completo')
    console.log('Rota / solicitada')    // Substitua pelo seu nome
})

app.listen(port, () => {                // Um socket para "escutar" as requisições
    console.log(`Serviço escutando na porta:  ${port}`)
})