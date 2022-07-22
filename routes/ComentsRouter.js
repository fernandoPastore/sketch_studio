var express = require('express');
var router = express.Router();
const isLogin = require('../middlewares/isLogin');
const ComentsController = require('../controllers/ComentsController')


router.get('/comentsPage', isLogin,ComentsController.showComentsPage);
router.post('/comentsPage', isLogin,ComentsController.writeComent);

module.exports = router;