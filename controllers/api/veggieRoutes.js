const router = require("express").Router()
const {Veggie} = require("../../models")

router.get("/", async (req, res) =>{
try {
    const veggie = await Veggie.findAll()
    res.status(200).json(veggie)

} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
})

<<<<<<< HEAD
router.post("/", async (req, res) =>{
    try {
        const veggie = await Veggie.create(req.body)
        res.status(200).json(veggie)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

=======
>>>>>>> 8b0f3a42e23b58e5fac21ca2359ce0d6d43ab40d
module.exports = router