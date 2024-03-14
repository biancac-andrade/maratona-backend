// Vamos incluir nossas rotas aqui
const { getAll, create, cardUpdate, cardDelete } = require("./controller");
const express = require("express");
const router = express.Router();

//vai permitir entregar como rtespota de uma requisicao a lista de flashcards

router.get("/cards", getAll);

router.post("/cards", create);

router.put("/cards/:id", cardUpdate);

router.delete("/cards/:id", cardDelete);

module.exports = router;
