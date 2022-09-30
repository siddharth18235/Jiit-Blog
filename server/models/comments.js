const mongoose=require('mongoose');
const schema=mongoose.schema;
const CommentSchema = new schema({
    content: {
        type:String,
        required:true
    },
    likes:{
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Comment',CommentSchema);