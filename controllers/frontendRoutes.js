const router = require('express').Router();
const {Veggie} = require('../models');

router.get('/', async (req, res) => {
    try {
        const veggieData = await Veggie.findAll()
        const veggies = veggieData.map((veggie) => veggie.get({ plain: true }))
        console.log(veggies);
        res.render("home", {veggies: veggies})
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
})
router.get("/new-veggie", (req,res) => {
    try {
      res.render("newVeggie")
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
      
    }
  })
module.exports = router;