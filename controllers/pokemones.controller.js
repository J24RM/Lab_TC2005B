const pokemonesModel = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/models/pokemones.models.js');
const Tipo = require('../models/tipo.model');
const { request, response } = require('express');

exports.get_add = (request, response, next) => {
    Tipo.fetchAll().then(([rows, fieldData]) => {
        response.render('new', {
            csrfToken: request.csrfToken(),
            username: request.session.username || '',
            tipos: rows,
        });
    }).catch((error) => {next(error)});
};

exports.post_add = (request, response, next) => {
    //Para crear un objeto de nuestro modelo
    const pokemon = new pokemonesModel(request.body.numero, request.body.nombre, 
        request.body.tipo, request.body.region, request.body.imagen);

    pokemon.save().then(() => {
        return response.redirect('/pokemones');
    }).catch((error) => {next(error)});
};

exports.get_list = (request, response, next) => {
    Promise.all([
        pokemonesModel.fetch(request.params.pokemon_numero),
        Tipo.fetchAll()
    ]).then(([pokemonData, tiposData]) => {
        const pokemones = pokemonData[0];
        const tipos = tiposData[0];
        return response.render('list_pokemones', {
            permisos: request.session.permisos || [],
            username: request.session.username || '',
            pokemones: pokemones,
            tipos: tipos
        });
    }).catch((error) => {
        next(error);
    });

};

// Modificar

exports.get_modificar = (request, response, next) => {
    
    Promise.all([
        pokemonesModel.fetchOne(request.params.pokemon_numero),
        Tipo.fetchAll()
    ]).then (([pokemonData, tiposData]) => {
        // Sacar solo los datos que queremos
        const pokemon = pokemonData[0][0];
        const tipos = tiposData[0];
        response.render('modificar', {
            csrfToken: request.csrfToken(),
            permisos: request.session.permisos || [],
            username: request.session.username || '',
            pokemon: pokemon,
            tipos: tipos
        });
    }).catch((error) => {
        next(error);
    })
}

exports.post_modificar = (request, response, next) => {

    const numero = request.params.pokemon_numero;

    const nombre = request.body.nombre;
    const tipo = request.body.tipo;
    const region = request.body.region;
    const imagen = request.body.imagen;

    pokemonesModel.update(numero, nombre, tipo, region, imagen)
    .then(() => {
        response.redirect('/pokemones');
    })
    .catch(error => {
        next(error);
    });

};


// Codigo que no se usa


exports.get_ordenar = (request, response, next) => {
    response.render('ordenar', 
        {username: request.session.username || ''});
};

exports.post_ordenar = (request, response, next) => {

    const criterio = request.body.criterio;

    let pokemones;

    // Para en un futuro poner mas maneras de ordenar
    if (criterio === 'numero') {
        pokemones = pokemonesModel.ordenar_por_numero();
    }

    response.render('list_pokemones', 
        { username: request.session.username || '',
        pokemones: pokemones });
};
