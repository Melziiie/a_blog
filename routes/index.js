const ctrl = require('../controllers/users');
var express = require('express');
var router = express.Router();


// Register New User
router.post('/register', ctrl.register);

//User Login
router.post('/', ctrl.login);

module.exports = router;
