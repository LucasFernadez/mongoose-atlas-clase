const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');

router.use('/users', usersRoutes);  // Mejor dejarlo con prefijo /users

module.exports = router;