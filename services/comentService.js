const Post = require("../models/Post");
const Coment = require("../models/Coment")

class ComentService {
    static async serviceGetComents(req, next) {
        try {
            const post = await Post.findById(req.params.id).populate('coments');
            return post
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async serviceAddComent(req, next) {
        try {
            const newComent = await Coment.create(req.body);
            const post = await Post.findByIdAndUpdate(req.params.id,
                { $push: { coments: newComent } },
                { new: true })
            return post
        } catch (err) {
            console.error(err)
            next(err)
        }
    }
}

module.exports = ComentService