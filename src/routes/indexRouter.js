var express = require('express');
let indexController=require('./controller/indexController')
var router = express.Router();

/* GET home page. */
router.get('/', indexController.getIndex);


module.exports = router;
