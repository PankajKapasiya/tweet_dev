import  Hashtag from '../models/hashtags.js';

class hashtagrepository{

    async create(data){
        try{
            const hash= await Hashtag.create(data);
            return hash;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
    
    async bulkCreate(data){
        try {
            // data array of object
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async update(id,tweet_id){
        try{
           const response= await Hashtag.findByIdAndUpdate(
                    id,   // the hashtag _id
                    { $push: { tweets: tweet_id } },
                    { new: true }  // returns the updated document
            );
            return response;
        }
        catch(error){
            console.log(error);
            throw error;
        }

    }
    async find(data){
        try {
            const response = await Hashtag.find(data);
            return response;
        }
        catch(error){
            console.log("something went wrong in repository layer");
            console.log(error);
        }
    }
    
    async get(id){
         try{
            const hash= await Hashtag.findById(id);
            return hash;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
    
    async destroy(id){
         try{
            const hash= await Hashtag.findByIdAndDelete(id);
            return hash;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title :titleList
            });
            //return array of object
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

export default hashtagrepository;