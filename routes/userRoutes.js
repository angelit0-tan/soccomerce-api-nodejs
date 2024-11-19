const express = require('express');
const router = express.Router();
const { 
    indexAction,
    createAction,
    showAction,
    updateAction,
    deleteAction
} = require('../controllers/userController.js');


router.route('/').get(indexAction);
router.route('/').post(createAction);

module.exports = router;