exports.get_login = (request, response, next) => {
    response.render('login', 
        {username: request.session.username || '',})
}

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username
    response.redirect('/pokemones')
}

exports.get_logout = (request, response, next) => {
    request.session.destroy (() => {
        response.redirect('/user/login')
    })
}

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('signup', {
        username: request.session.username || '',
        error: error,
    })
}

exports.post_signup = (request, response, next) => {
    if(request.body.contrasena != request.body.confirma_contrasena){
        request.session.error = 'Las contrasenas no son iguales';
        response.redirect('/user/signup')
    }
    else{
        response.redirect('/user/login')
    }
}
