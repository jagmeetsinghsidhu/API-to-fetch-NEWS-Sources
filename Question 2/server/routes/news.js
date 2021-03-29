let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let newsController = require('../controllers/news');


router.get('/fetchAndUpdate', newsController.fetchAndUpdateNews);

module.exports = router;