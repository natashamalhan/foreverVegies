const router = require("express").Router()
<<<<<<< HEAD
const veggieRoutes = require("./api/veggieRoutes")
const frontendRoutes = require("./frontendRoutes")

router.use("/api/veggies", veggieRoutes)
=======
const apiRoutes = require("./api")
const frontendRoutes = require("./frontendRoutes")

router.use("/api", apiRoutes)
>>>>>>> 8b0f3a42e23b58e5fac21ca2359ce0d6d43ab40d
router.use("/", frontendRoutes)

module.exports = router