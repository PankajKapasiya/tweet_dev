import express from 'express';
import connect from './config/database.js';
const app = express();

// import Tweet from './models/tweet.js';

// const Comment = require('./models/comment');

import {tweetService} from './service/index.js';
// const {hashtagrepository} = require('./repository/index');

app.listen(3000 , async () =>{
    console.log(`server started`);
    await connect();
    console.log('Mongo db started');

    // const tweet = await Tweet.create({
    //     content :'First tweet',
    //     userEmail :'a@b.com'

    const tweetser = new tweetService();
    const res = await tweetser.create({content :'this is #refactor module'});
    // console.log(res);

    // console.log(response);
    // const tweetrepo =new tweetrepository();
    // const tweet = await tweetrepo.create({content : "new mail"});
    // console.log(tweet);
    // const tweet= await tweetrepo.destroy('689f092223dc3c5ae49b60cd');

    // const tweetrepo =new tweetrepository();
    // const tweet = await tweetrepo.create({content: 'Created a new tweet'});
    // const tweet = await tweetrepo.getidcomments('689f3aa6f5325b3fbf52e304')
    // console.log(tweet);
    // const comment = await Comment.create({content : 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
});