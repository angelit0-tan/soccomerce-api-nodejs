const Post = require('../models/Post.js')

const indexAction = async (req, res) => {
    const data = await Post.find({}).populate('shared_ref');
    res.status(200).json({ success: true, data });
}

const createAction = (req, res) => {
    Post.create({
        'name': req.body.name,
        'type': req.body.type,
        'shared_resource_type': req.body.shared_resource_type,
        'shared_ref': req.body.shared_ref
    })
    res.status(200).json({ success: true });
}

module.exports = {
    indexAction,
    createAction
}