const mongoose=require('mongoose');
const schema=mongoose.schema;
const autopopulate = require('mongoose-autopopulate')
const BlogSchema=new schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required: true
    },
    totalLikes: {
        type:Number,
        required: true,
        default: 0
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        reference: 'Blog',
        required: false,
        autopopulate: true
    }
    
});
BlogSchema.plugin(autopopulate);
module.exports = mongoose.model('Blog',BlogSchema);