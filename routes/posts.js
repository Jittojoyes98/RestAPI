import express from "express";
import postSchema from "../models/posts.js"

const postRouter=express.Router()

postRouter.get('/',async(req,res)=>{
    try{
        const posts=await postSchema.find();
        res.json(posts)
    }catch(err){
        res.json(err);
    }
})

postRouter.post('/',async(req,res)=>{
    const post=new postSchema({
        title:req.body.title,
        description:req.body.description,
    })
    try{
        const postSaved=await post.save()
        res.json(postSaved)
    }catch(err){
        res.json(err);
    }
})

postRouter.get('/:postId',async(req,res)=>{
    try{
        const post= await postSchema.findById(req.params.postId)
        res.json(post)
    }catch(err){
        res.json(err);
    }
})

postRouter.delete('/:postId',async(req,res)=>{
    try{
        const postRemoved=await postSchema.remove({_id:req.params.postId});
        res.json(postRemoved)
    }catch(err){
        res.json(err);
    }
})

// updates didn't added



export default postRouter;