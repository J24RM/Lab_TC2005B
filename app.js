const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const session = require('express-session');
app.use(bodyParser.json());

const path = require("path");
app.use(express.static(path.join(__dirname, 'public/uploads')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(bodyParser.urlencoded({extended: false}));

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + '-' + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 

const csrf = require('csurf');
const csrfProtection = csrf();

app.use(csrfProtection); 

const rutas_pokemones = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/routes/pokemones.routes.js');

const rutas_entrenadores = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/routes/entrenadores.routes.js');

const rutas_usuarios = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/routes/user.routes.js');

app.use('/pokemones', rutas_pokemones);

app.use('/entrenadores', rutas_entrenadores);

app.use("/user", rutas_usuarios);

app.use((error, request, response, next) => {
    response.status(500).send(`Error interno del servidor: ${error.stack}`);
});

app.use((request, response, next) => {
    response.status(404).send("La ruta no existe");
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/user/login`);
});