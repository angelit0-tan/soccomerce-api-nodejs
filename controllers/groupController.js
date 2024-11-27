const Group = require('../models/Group.js')

const indexAction = async(req, res) => {
    const data = await Group.find({});
    res.status(200).json({ success: true, data});
}

const createAction = (req, res) => {
    Group.create({
        'name' : req.body.name,
        'description' : req.body.description
    })
    res.status(200).json({ success: true});
}

module.exports = {
    indexAction,
    createAction
}