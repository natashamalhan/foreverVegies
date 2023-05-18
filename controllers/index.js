const router = require("express").Router()
const veggieRoutes = require("./api/veggieRoutes")
const frontendRoutes = require("./frontendRoutes")

router.use("/api/veggies", veggieRoutes)
router.use("/", frontendRoutes)

module.exports = router