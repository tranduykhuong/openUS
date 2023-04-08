const { Router } = require('express');
const express = require('express');

const interviewController = require('../controllers/interviewController')

const router = express.Router();

// The first interview
router.post('/', interviewController.createInterview);

// Answer interview
router.post('/answer/:idInterview', interviewController.answer);

// Get one interview
router.get('/:idInterview', interviewController.getOne);

module.exports = router;