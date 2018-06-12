var express = require('express');
var router = express.Router();
var WhatWeDo = require('../controllers/WhatWeDo')


/* GET home page. */
router.get('/WhatWeDo', WhatWeDo.LandingPage);




module.exports = router;