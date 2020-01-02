var express = require('express');
var router = express.Router();
const dogsController = require('../controllers/dogs.controller');

// get all dogs
router.get('/', async function (req, res, next) {
    try {
        let dogs = await dogsController.getDogs();  // logic is done in the controller
        res.send(dogs);
    } catch (error) {
        next(error);
    }
})

module.exports = router;