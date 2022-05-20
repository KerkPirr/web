const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const {response} = require("express");
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(express.static(__dirname))

function Post_Construct(title, date, body,Comments) {
    this.title = title;
    this.date_publication = date;
    this.body = body;
    this.Comments = [];}

function CreateComment(name, mail, sait, text){
    this.name = name;
    this.mail = mail;
    this.sait = sait;
    this.text = text;
}
let Posts = [];
Posts.push(new Post_Construct("Text sample 1",
    "01.02.2003",
    "I will defend humanity on my own terms."));


Posts.push(new Post_Construct("Text sample 2",
    "04.05.2006",
    "I am Rasputin"));

Posts.push(new Post_Construct("Text sample 3",
    "07.08.2009",
    "Guardian of all I survey.\n I have no equal"));


app.get('/feed',(req,res)=>{

  res.render('pages/posts',{
      posts:Posts
  })
})
app.get('/feed/:postID',(req,res)=>{
    let title = "name"
    let index = req.params["postID"];
    res.render('pages/post',{
        app_title: title,
        postID: index,
        post:Posts[index]
    })
})
app.post

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})