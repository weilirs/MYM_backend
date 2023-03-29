const express = require("express")

const {nasaController} = require("../controllers/nasaController")
const router = express.Router()

router.get("/nasa",nasaController)

module.exports = router;