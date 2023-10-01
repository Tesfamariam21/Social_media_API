const express = require('express');
const Login = require('../middelware/login');
const SignUp = require('../middelware/signup');
const Logout = require('../middelware/logout');
const Revoked = require('../middelware/revoked');
const authenticated = require('../middelware/authenticated');

const router =express.Router();

router.route('/signup').post(Login);

router.route('/login').post(SignUp);

router.route('/logout').post(authenticated, Revoked,Logout);


module.exports = router;