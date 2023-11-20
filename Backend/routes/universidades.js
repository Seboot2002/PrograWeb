const express = require('express')
const UniversidadController = require('../controllers/universidadController.js')

const { findAll, create, update, remove, findOne } = UniversidadController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:idUniversidad", remove)
router.get("/:idUniversidad", findOne)

module.exports = router;