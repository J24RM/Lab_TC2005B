const express = require('express');

const router = express.Router();

const pokemonesController = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/controllers/pokemones.controller.js');

router.get('/new', pokemonesController.get_add);
router.post('/new', pokemonesController.post_add);
router.get('/ordenar', pokemonesController.get_ordenar);
router.post('/ordenar', pokemonesController.post_ordenar);
router.use(pokemonesController.get_list);

module.exports = router;