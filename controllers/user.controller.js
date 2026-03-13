const UserModel = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/models/user.model.js') 
const bcrypt = require('bcrypt');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = ''
    response.render('login', {   
            csrfToken: request.csrfToken(),
            username: request.session.username || '',
            error: error,
        })
}

exports.post_login = (request, response, next) => {
    UserModel.fetchOne(request.body.username).then(([usuarios, fieldData]) => {
        if(usuarios.length > 0) {
            bcrypt.compare(request.body.password, usuarios[0].password).then((doMatch) => {
                console.log(usuarios[0]);
                if(doMatch){
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    UserModel.getPermisos(request.body.username).then(([permisos, fieldData]) => {
                        request.session.permisos = permisos;
                        return request.session.save(() => {
                            return response.redirect('/pokemones');
                        }); 
                    }).catch((error) => {
                        console.log(error);
                        next(error);
                    });
                }
                else{
                    request.session.error = "Usuario y/o contraseña no coinciden";
                    return response.redirect('/user/login')
                }

            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            request.session.error = "Usuario y/o contraseña no coinciden";
            return response.redirect('/user/login')
        }
    }).catch((error) => {
        console.log(error);
    })
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
        csrfToken: request.csrfToken(),
        username: request.session.username || '',
        error: error,
    })
}

exports.post_signup = (request, response, next) => {
    if(request.body.password != request.body.confirmPassword){
        request.session.error = 'Las contrasenas no son iguales';
        response.redirect('/user/signup')
    }
    else{
        const user = new 
            UserModel(request.body.username, request.body.nombre, request.body.password, request.body.correo);
            user.save().then(() => {
                return response.redirect('/user/login');
            }).catch((error) => {
                console.log(error);
            })
    }
}
