const express = require('express');

const router = express.Router();

const pokemonesController = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/controllers/pokemones.controller.js');
const isAuth = require('../util/is-auth');
const canCreate = require('../util/can-create');
const canView = require('../util/can-view')

router.get('/buscar/:busqueda', isAuth, canView ,pokemonesController.get_buscar);
router.get('/new',isAuth , canCreate , pokemonesController.get_add);
router.post('/new',isAuth , canCreate , pokemonesController.post_add);
router.get('/modificar/:pokemon_numero',isAuth , pokemonesController.get_modificar);
router.post('/modificar/:pokemon_numero',isAuth , pokemonesController.post_modificar);
router.get('/juegos', isAuth, pokemonesController.get_juegos);

router.use('/:pokemon_numero',isAuth , canView , pokemonesController.get_list);
router.use(isAuth , canView ,pokemonesController.get_list);

module.exports = router;