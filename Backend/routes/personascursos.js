const express = require('express')
const PersonaCursoController = require('../controllers/personaCursoController.js')

const { findAll, create, update, remove, findOne } = PersonaCursoController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:idPersonaCurso", remove)
router.get("/:idPersonaCurso", findOne)

module.exports = router;