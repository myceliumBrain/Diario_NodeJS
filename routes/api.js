const express = require("express");
const bodyParser = require('body-parser')
const posts = require('../model/posts')

const router = express.Router()

bParser = bodyParser.json();

router.get("/allPosts", (req, res)=>{
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/newPost", bParser, (req, res)=>{
    let title = req.body.title;
    let content = req.body.content;

    posts.newPost(title, content)

    res.send("Post adicionado :)")
})

router.delete("/delete", bParser, (req, res)=>{
    let id = req.body.id;
    
    posts.deletePost(id)

    res.send("Post deletado pelo id")
})

module.exports = router;