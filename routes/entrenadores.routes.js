const express = require('express');

const router = express.Router();

const html_index = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Entrenadores</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
    </head>
    <body>
        <div class="container has-text-centered">
            <h1> ENTRENADORES </h1>
            <a href="/entrenadores/brock"> <button class="button"> BROCK </button> </a>
            <a href="/entrenadores/ash"> <button class="button"> ASH </button> </a>
        </div>
        <footer class="footer">
            <div class="content has-text-centered">
                <p class="title is-5"> Describe el archivo package.json. </p>
                <p>
                    Se crea al iniciar un proyecto con npm init, te crea una json que contiene una lista de las caracteristicas del proyecto <br>
                    te dice las dependencias del proyecto y dependencias de desarrolador, el autor, nombre, version y tambien puedes poner script que sirven <br>
                    para poder ejecutar comandos mas facil.
                </p>
            </div>
        </footer>
    </body>
    
</html>`;

const html_ash = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Entrenadores</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
    </head>
    <body>
        <div class="container has-text-centered">
            <h1> ASH </h1>
            <figure class="image is-128x128">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e4/Ash_Ketchum_Journeys.png" />
            </figure>
            <br>
            <br>
            <a href="/entrenadores">
                <button class="button"> Volver </button>
            </a>
    </body>
</html>`;

const html_brock = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Entrenadores</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
    </head>
    <body>
        <div class="container has-text-centered">
            <h1> Brock </h1>
            <figure class="image is-128x128">
                <img src="https://images.wikidexcdn.net/mwuploads/wikidex/3/3b/latest/20180812021535/Brock_LGPE.png" />
            </figure>
            <br>
            <br>
            <a href="/entrenadores">
                <button class="button"> Volver </button>
            </a>
    </body>
</html>`;

router.get('/brock', (request, response, next) => {
    response.send(html_brock); 
});

router.get('/ash', (request, response, next) => {
    response.send(html_ash); 
});

router.get('/', (request, response, next) => {
    response.send(html_index); 
});

module.exports = router;