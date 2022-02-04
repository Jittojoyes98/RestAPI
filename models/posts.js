import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

export default mongoose.model('Post',postSchema)


// Another way 

// title: String,
// description:String,
// date:Date.now,

