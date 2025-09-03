import {tweetrepository,hashtagrepository} from '../repository/index.js';

// const Hashtag = require('../models/hashtags');
class tweetService{

    constructor(){
        this.tweetrepo = new tweetrepository();
        this.hashrepo = new hashtagrepository();
    }

    async create(data){
        try{
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9]+/g).map((tag) => tag.substring(1).toLowerCase());
            // console.log(tags);
            const tweet = await this.tweetrepo.create(data);
            let alreadyPresentTags = await this.hashrepo.findByName(tags);
            console.log('already present tags',alreadyPresentTags);
            let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
            console.log(titleOfPresenttags);
            let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
            newTags = newTags.map(tag => {
                return {title :tag, tweets :[tweet.id]};
            });

            await this.hashrepo.bulkCreate(newTags);

            alreadyPresentTags.forEach((tag) =>{
                tag.tweets.push(tweet.id);
                tag.save();
            });
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

export default tweetService;