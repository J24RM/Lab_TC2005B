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

const html_header = `
  <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pokemon</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  <style>
    .is-purple {
      background-color: #a64ac9;
      color: white;
    }
  </style>
</head>

<body>
  <div class="main-content">
    <section class="section">
      <div class="container">

        <section class="hero">
          <div class="hero-body">
            <figure class="image is-128x128 is-inline-block">
              <img class="is-rounded" src="https://i.pinimg.com/474x/8a/e5/08/8ae50860c9392e73de6b68c016a222c9.jpg">
            </figure>
            <p class="title">POKEMON</p>
          </div>
        </section>

        <nav class="navbar" role="navigation">
          <div class="navbar-menu">
            <div class="navbar-start">
              <a href="https://www.pokemon.com/el" class="navbar-item">
                Página Oficial
              </a>

              <a href="https://www.pokemon.com/el/videojuegos-pokemon" class="navbar-item">
                Videojuegos
              </a>

              <a href = "http://localhost:3000/pokemones/new" class = "navbar-item">
                Nuevo Pokemon
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Más</a>
                <div class="navbar-dropdown">
                  <a href="https://www.pokemon.com/el/jcc-pokemon" class="navbar-item">
                    TCJ
                  </a>
                  <a href="https://www.pokemon.com/el/dibujos-animados" class="navbar-item">
                    Anime
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
`;

const html_footer = `
  <footer class="footer">
    <a href="/pokemones">
      <input class="button is-primary" type="submit" value="Volver a pagina principal">
    </a>
  </footer>
  <script src="/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/lab5-6/pokescript.js"></script>
</body>
</html>
`;

const html_form = `
  <form action="/pokemones/new" method="POST">
    <div class="field">
      <label for="numero" class="label"> Numero de Pokedex </label>
      <div class="control">
        <input id="numero" name="numero" class="input" type="text" placeholder="e.g 025">
      </div>
    </div>

  <div class="field">
    <label for="nombre" class="label"> Nombre </label>
    <div class="control">
      <input id="nombre" name="nombre" class="input" type="text" placeholder="e.g Pikachu">
    </div>
  </div>

  <div class="field">
    <label for="tipo" class="label"> Tipo(s) </label>
    <div class="control">
      <input id="tipo" name="tipo" class="input" type="text" placeholder="e.g Electrico">
    </div>
  </div>

<div class="field">
    <label for="region" class="label"> Region </label>
    <div class="control">
        <input id="region" name="region" class="input" type="text" placeholder="e.g Kanto">
    </div>
</div>

<div class="field">
    <label for="imagen" class="label">Imagen</label>
    <div class="control">
        <input id="imagen" name="imagen" class="input" type="text" placeholder="e.g. https://tooys.mx/media/catalog/product/cache/0daeb07bb1d294c1f281fab47369d56a/h/o/hot-toys-league-of-legends-vi-sixth-scale_0.jpg">
    </div>
</div>

<input class="button is-primary" type="submit" value="Guardar personaje">
</form>
<br>
<br>
<br>
`;


router.get('/new', (request, response, next) => {
    response.send(html_header + html_form + html_footer); 
});

router.post('/new', (request, response, next) => {
    pokemones.push(request.body);
    response.redirect('/pokemones');
});

router.use('/', (request, response, next) => {
    let html_index = `
    <h1 class="title has-text-centered mt-5">
        Pokédex Nacional #001 - #006
    </h1>

    <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tipo(s)</th>
            <th>Región</th>
        </tr>
    </thead>
    <tbody>
    `;

    for(let pokemon of pokemones){
    html_index += 
        `<tr>
            <td> ${pokemon.numero} </td>
            <td>
                <div class="is-flex is-align-items-center">
                    <strong> ${pokemon.nombre} </strong> 
                    <figure class="image is-48x48 ml-2">
                        <img src="${pokemon.imagen}">
                    </figure>
                </div>
            </td>
        <td>
            ${pokemon.tipo}
        </td>
        <td> ${pokemon.region} </td>
        </tr>
    `;
    };
    html_index += `
                    </tbody>
                </table>
            </div>
        </section>
    </div>
    `;
    response.send(html_header + html_index + html_footer); 
});

module.exports = router;