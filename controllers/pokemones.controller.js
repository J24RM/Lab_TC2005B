const pokemonesModel = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/models/pokemones.models.js');

exports.get_add = (request, response, next) => {
    response.render('new');
};

exports.post_add = (request, response, next) => {
    //Para crear un objeto de nuestro modelo
    const pokemon = new pokemonesModel(request.body.numero, request.body.nombre, 
        request.body.tipo, request.body.region, request.body.imagen);

    pokemon.save();

    response.redirect('/pokemones');
};

exports.get_ordenar = (request, response, next) => {
    response.render('ordenar');
};

exports.post_ordenar = (request, response, next) => {

    const criterio = request.body.criterio;

    let pokemones;

    // Para en un futuro poner mas maneras de ordenar
    if (criterio === 'numero') {
        pokemones = pokemonesModel.ordenar_por_numero();
    }

    response.render('list_pokemones', { pokemones: pokemones });
};

exports.get_list = (request, response, next) => {
    const pokemones = pokemonesModel.fetchAll()
    response.render('list_pokemones', {pokemones: pokemones}); 
};
