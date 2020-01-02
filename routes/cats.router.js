const express = require('express');
const router = express.Router();
const catController = require('../controllers/cats.controller');

// Cat Simple CRUD routing

// Getting all
router.get('/', catController.getCats);

// Creating new
router.post('/', catController.createCat)

// Getting single
router.get('/:id', catController.getCat, (req, res) => res.json(res.cat));

// Updating one
router.patch('/:id', catController.getCat, catController.updateCat);

// Deleting one
router.delete('/:id', catController.getCat, catController.deleteCat);

module.exports = router;