const pokemonesModel = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/models/pokemones.models.js');

exports.get_add = (request, response, next) => {
    response.render('new', 
        {username: request.session.username || '',});
};

exports.post_add = (request, response, next) => {
    //Para crear un objeto de nuestro modelo
    const pokemon = new pokemonesModel(request.body.numero, request.body.nombre, 
        request.body.tipo, request.body.region, request.body.imagen);

    pokemon.save();

    response.setHeader('Set-Cookie', `ultimo_pokemon=${pokemon.nombre}; secure`);

    response.redirect('/pokemones');
};

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

exports.get_list = (request, response, next) => {
    console.log(request.session.username);
    const pokemones = pokemonesModel.fetchAll()
    response.render('list_pokemones', {
        username: request.session.username || '',
        pokemones: pokemones}); 
};
