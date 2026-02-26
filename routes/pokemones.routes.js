const express = require('express');

const router = express.Router();

const pokemones = [
  {
    numero: "001" ,
    nombre: "Bulbasaur",
    tipo: `<span class="tag is-success">Planta</span>
                <span class="tag is-purple">Veneno</span>`,
    region: "Kanto",
    imagen: "https://art.pixilart.com/b25ec9eb49f290a.png",
  },
  {
    numero: "004" ,
    nombre: "Charmander",
    tipo: `<span class="tag is-danger">Fuego</span>`,
    region: "Kanto",
    imagen: "https://art.pixilart.com/c79ce0ff92ae322.png",
  },
];

router.get('/old', (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'HTMLS', 'index.html'));
});

router.get('/new', (request, response, next) => {
    response.render('new');
});

router.post('/new', (request, response, next) => {
    pokemones.push(request.body);
    response.redirect('/pokemones');
});


router.use('/', (request, response, next) => {

  response.render('list', {pokemones: pokemones}); 
});

module.exports = router;