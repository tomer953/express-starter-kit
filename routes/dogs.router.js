var express = require('express');
var router = express.Router();
const dogsController = require('../controllers/dogs.controller');

// Getting all
router.get('/', dogsController.getDogs);

module.exports = router;