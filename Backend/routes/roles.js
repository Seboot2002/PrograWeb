const express = require('express')
const RolController = require('../controllers/rolController.js')

const { findAll, create, update, remove, findOne } = RolController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:idRol", remove)
router.get("/:idRol", findOne)

module.exports = router;