const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet =require('./models/tweet');

const Comment = require('./models/comment');

const {tweetService} = require('./service/index');
const {hashtagrepository} = require('./repository/index');

app.listen(3000 , async () =>{
    console.log(`server started`);
    await connect();
    console.log('Mongo db started');

    // const tweet = await Tweet.create({
    //     content :'First tweet',
    //     userEmail :'a@b.com'
    // });
    // const tweetser = new tweetService();
    // const res = await tweetser.create({content :'#today is 3 Sept and #pankaj is in #trend as well #famous'});
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