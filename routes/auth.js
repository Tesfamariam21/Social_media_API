const express = require('express');
const Login = require('../middelware/authentication/login');
const SignUp = require('../middelware/authentication/signup');
const Logout = require('../middelware/authentication/logout');
const Revoked = require('../middelware/authentication/revoked');
const authenticated = require('../middelware/authentication/authenticated');

const router =express.Router();

router.route('/signup').post(Login);

router.route('/login').post(SignUp);

router.route('/logout').post(authenticated, Revoked,Logout);


module.exports = router;