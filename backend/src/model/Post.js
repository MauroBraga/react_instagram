const mogoose = require('mongoose')

const PostSchema = new mogoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes:{
        type: Number,
        default: 0,
    }
},{
    timestamps: true
})

module.exports = mogoose.model('Post', PostSchema)