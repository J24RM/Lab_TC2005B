const express = require('express');

const router = express.Router();

const userController = require('/Users/jesusrodriguez/Desktop/Repos/Lab_TC2005B/controllers/user.controller.js');

router.get('/login', userController.get_login)
router.post('/login', userController.post_login)
router.get('/logout', userController.get_logout)
router.get('/signup', userController.get_signup)
router.post('/signup', userController.post_signup)

module.exports = router;