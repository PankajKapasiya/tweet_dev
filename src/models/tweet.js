import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content :{
        type :String,
        required: true,
        max :[250, 'Tweet cannot more than 250 character'],
    },
    hashtags : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hashtag'
        }
     ]
    // userEmail :{
    //     type :String
    // },
    // comments:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'Comment'
    //     }
    // ]
}, {timestamps : true});

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;