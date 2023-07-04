import express, { Router } from 'express'; 
import serverless from 'serverless-http';

const api = express();

const router = Router();
router.get('/nome', (req, res) => {
    res.json({
        "nome" : "Seu_nome_completo"    // Substitua pelo seu nome
    })
    console.log('Rota /nome solicitada')  
});

api.use('/api/', router);

export const handler = serverless(api);