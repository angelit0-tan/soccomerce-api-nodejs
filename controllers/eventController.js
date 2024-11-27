const Event = require('../models/Event.js');

const indexAction = async (req, res) => {
    console.log('indexAction')
    const data = await Event.find({});
    res.status(200).json({ success: true, data});
}

const createAction = (req, res) => {
    Event.create({
        'name' : req.body.name,
        'description' : req.body.description
    })
    res.status(200).json({ success: true});
}

module.exports = {
    indexAction,
    createAction
}