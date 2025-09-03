const {tweetrepository} = require('../repository/index');

const {hashtagrepository}= require('../repository/index');
// const Hashtag = require('../models/hashtags');
class tweetService{

    constructor(){
        this.tweetrepo = new tweetrepository();
        this.hashrepo = new hashtagrepository();
    }
    
    async create(data){
        try{
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9]+/g);
            console.log(tags);
            const tweet = await this.tweetrepo.create(data);
            const tweet_id=tweet._id;
            for(let i=0; i<tags.length; i++){
                // console.log(tag1s[i]);
                const res = await this.hashrepo.find({title : tags[i]});
                if(res.length==0){
                    // console.log(res.length);
                    await this.hashrepo.create({title : tags[i]});
                }
            }
            // const response = await this.hashrepo.find({title :tags[0]});
            // console.log(response[0]._id);
            // const idis=response[0]._id;
            // console.log(idis);
            // const res1=await this.hashrepo.update(idis, tweet_id);
            for(let i=0; i<tags.length; i++){
                const response = await this.hashrepo.find({title :tags[i]});
                this.tweetrepo.update_hash(tweet_id,response[0]._id);
                const res1=await this.hashrepo.update(response[0]._id, tweet_id);
            }
            return tweet;
        }
        catch(error){
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
     async destory_by_content(data){
        try{
            const tweet = await this.tweetrepo.destory_by_content(data);
            return tweet;
        }
        catch(error){
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
    async destroy(id){
        try{
            const tweet = await this.tweetrepo.destroy(id);
            return tweet;
        }
        catch(error){
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
};

module.exports =tweetService;