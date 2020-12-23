var express = require('express');
let productDetailController=require('./controller/productDetailController')
var router = express.Router();

/* GET home page. */
router.get('/:id/:category', productDetailController.getProduct);


module.exports = router;
