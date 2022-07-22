var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const isLogin = require('../middlewares/isLogin')

router.get('/login',AuthController.showLogin);
router.get('/registro', AuthController.showRegistro);
router.get('/resetSenha', AuthController.showResetSenha);
router.get('/homePage', isLogin,AuthController.showHomePage);
router.post('/login',AuthController.Login);
router.post('/registro', AuthController.Registrar);
router.get('/editPage', isLogin,UserController.showEditPage);
router.put('/editPage', isLogin,UserController.editUser);
router.get('/contentPage', isLogin,UserController.showContentPage);
router.get('/sobreNos', isLogin,UserController.showSobreNos);


module.exports = router;
