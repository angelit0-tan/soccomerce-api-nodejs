const express = require('express');
const router = express.Router();

const { 
    indexAction, 
    createAction 
} = require('../controllers/eventController.js');

router.route('/')
    .get(indexAction)
    .post(createAction);

module.exports = router;