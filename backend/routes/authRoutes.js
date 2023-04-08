const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// SIGNUP
router.post('/signup', authController.signup);

// LOGIN
router.post('/login', authController.login);

// LOGOUT
router.get('/logout', authController.logout);

module.exports = router;