import mongoose from "mongoose";

const likeschema = new mongoose.Schema({
    onmodel :{
        type :String,
        required : true,
        enum : ['Tweet', 'Comment']
    },
    likeable :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onmodel'
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
}, {timestamps : true});
 
const Like = mongoose.model('Like', likeschema);

export default Like;