const express = require('express');
const Login = require('../middelware/login');
const SignUp = require('../middelware/signup');

const router =express.Router();

router.route('/signup').post(Login);

router.route('/login').post(SignUp);



module.exports = router;