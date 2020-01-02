const express = require('express');
const router = express.Router();
const catsController = require('../controllers/cats.controller');

// get all cats
router.get('/', async function (req, res, next) {
    try {
        let cats = await catsController.getCats();  // logic is done in the controller
        res.send(cats);
    } catch (error) {
        next(error);
    }
})

module.exports = router;