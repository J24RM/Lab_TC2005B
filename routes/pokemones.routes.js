const express = require('express');

const router = express.Router();

const pokemonesController = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/controllers/pokemones.controller.js');

router.get('/new', pokemonesController.get_add);
router.post('/new', pokemonesController.post_add);
router.get('/modificar/:pokemon_numero', pokemonesController.get_modificar);
router.post('/modificar/:pokemon_numero', pokemonesController.post_modificar);

router.use('/:pokemon_numero', pokemonesController.get_list);
router.use(pokemonesController.get_list);

module.exports = router;