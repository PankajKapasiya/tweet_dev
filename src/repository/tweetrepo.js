import Tweet from '../models/tweet.js';
import crudrepo from './crud-repository.js';

class tweetrepository extends crudrepo {

    constructor(){
        super(Tweet);
    }
    
    async getidcomments(id){
        try{
            const tweet= await Tweet.findById(id).populate({path:'comments'});
            console.log('find comment');
            return tweet;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
    async update_hash(id,hash_id){
        try{
            const response= await Tweet.findByIdAndUpdate(
                        id,   // the hashtag _id
                        { $push: { hashtags: hash_id } },
                        { new: true }  // returns the updated document
            );
            return response;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    
    }
    
    async destory_by_content(data){
        try{
            const response = await Tweet.find({content : data });
            // const id = response[0].id;
            for(let i=0; i<response.length; i++){
                const id = response[i].id;
                const tweet= await Tweet.findByIdAndDelete(id);
            }
            // const tweet= await Tweet.findByIdAndDelete(id);
            return response;
        }
        catch(error){
            throw error;
        }
    }
}

export default tweetrepository;