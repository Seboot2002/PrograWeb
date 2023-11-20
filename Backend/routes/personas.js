const express = require('express')
const PersonaController = require('../controllers/personaController.js')

const { findAll, create, update, remove, findOne } = PersonaController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:idPersona", remove)
router.get("/:idPersona", findOne)

module.exports = router;