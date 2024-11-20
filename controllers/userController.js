const User = require('../models/User.js');

// Show all users
const indexAction = (req, res) => {
    console.log('indexAction')
    const data = User.
    res.status(200).json({ success: true})
}

// create user
const createAction = (req, res) => {
    User.create({
        'name' : req.body.name, 
        'email' : req.body.email,
        'password' : req.body.password
    })
    res.status(200).json({ success: true})
}

// show single user
const showAction = (req, res) => {
    console.log('showAction')
    res.status(200).json({ success: true})
}

// update user
const updateAction = (req, res) => {
    console.log('updateAction')
    res.status(200).json({ success: true})
} 

// delete user
const deleteAction = (req, res) => {
    console.log('deleteAction')
    res.status(200).json({ success: true})
}


module.exports = {
    indexAction,
    createAction,
    showAction,
    updateAction,
    deleteAction
}