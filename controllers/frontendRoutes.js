const router = require('express').Router();
const {User, Veggie} = require('../models');

//const userRoutes = require('./userRoutes');
//const veggieRoutes = require('./veggieRoutes');

router.use('/users', userRoutes);
router.use('/veggies', veggieRoutes);

module.exports = router;