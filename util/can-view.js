module.exports = (request, response, next) => {
    let continuar = true;
    for (let permiso of request.session.permisos) {
        if (permiso.nombre_privilegio == 'ver_pokemones') {
            continuar = false;
            next();
        }
    }
    if (continuar) {
        request.session.error = 
            "No puede aceder a este contenido.";
        return response.redirect('/user/login');
    }
};