var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController');


router.get('/login', AuthController.getLogin);


module.exports = router;
