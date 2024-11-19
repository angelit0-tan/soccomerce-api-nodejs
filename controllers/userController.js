const User = require('../models/User.js');

// Show all users
const indexAction = (req, res) => {
    console.log('indexAction')
    res.status(200).json({ message: 'ok'})
}

// create user
const createAction = (req, res) => {
    console.log('createAction')
}

// show single user
const showAction = (req, res) => {
    console.log('showAction')
}

// update user
const updateAction = (req, res) => {
    console.log('updateAction')
} 

// delete user
const deleteAction = (req, res) => {
    console.log('deleteAction')
}


module.exports = {
    indexAction,
    createAction,
    showAction,
    updateAction,
    deleteAction
}