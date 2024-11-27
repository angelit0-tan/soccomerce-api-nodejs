const Post = require('../models/Post.js')

const indexAction = async (req, res) => {
    const data = await Post.find({}).populate('ref');
    res.status(200).json({ success: true, data });
}

const createAction = (req, res) => {
    Post.create({
        'name': req.body.name,
        'type': req.body.type,
        'ref': req.body.ref
    })
    res.status(200).json({ success: true });
}

module.exports = {
    indexAction,
    createAction
}