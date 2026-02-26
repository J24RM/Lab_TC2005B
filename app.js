const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

const rutas_pokemones = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/routes/pokemones.routes.js');

const rutas_entrenadores = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/routes/entrenadores.routes.js');

app.use('/pokemones', rutas_pokemones);

app.use((request, response, next) => {
    response.status(404).send("La ruta no existe");
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});