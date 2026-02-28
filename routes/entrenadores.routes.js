const express = require('express');

const router = express.Router();


router.get('/brock', (request, response, next) => {
    response.render('brock'); 
});

router.get('/ash', (request, response, next) => {
    response.render('ash'); 
});

router.get('/', (request, response, next) => {
    response.render('entrenadores'); 
});

module.exports = router;