import { Router } from "express";

import jwt from "jsonwebtoken";
import { selectUsuarioLogin } from "../bd.js";

const router = Router();

router.post("/login", async (req, res) => {
  console.log("Rota POST /login solicitada");
  try {
    const usuario = await selectUsuarioLogin(req.body.email, req.body.senha);
    if (usuario.length > 0) {
      const token = jwt.sign({ user: usuario[0].id }, process.env.SECRET, {
        expiresIn: 300,
      });
      res.status(202).json({ auth: true, token: token });
    } else res.status(404).json({ message: "Usuário/Senha incorreta!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

export default router;
