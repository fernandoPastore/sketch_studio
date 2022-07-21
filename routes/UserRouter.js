var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/admin', UserController.showAdmin);
router.get('/login',UserController.showLogin);
router.get('/registro', UserController.showRegistro);
router.get('/resetSenha', UserController.showResetSenha);
router.get('/homePage', UserController.showHomePage);
router.post('/login', UserController.Login);
router.post('/registro', UserController.Registrar);
router.get('/EditPage',UserController.showEditPage);

module.exports = router;
