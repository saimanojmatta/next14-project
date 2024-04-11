//Temporary Data
// const users=[
//     {id:1,name:"john"},
//     {id:2,name:"MarkHenry"}
// ]
// const posts=[
//     {id:1,title:"Post1",body:'....',userId:1},
//     {id:2,title:"Post2",body:'....',userId:2},
//     {id:3,title:"Post3",body:'....',userId:2},
//     {id:4,title:"Post4",body:'....',userId:1}
// ]
import { unstable_noStore as noStore } from "next/cache"
import { Post, User } from "./Modles"
import { connectToDb } from "./utils"

export const getPosts=async()=>{
    try{
        connectToDb()
        const posts=await Post.find()
        return posts
    }catch(err){
        console.log(err)
        throw new Error('Failed to fetch posts!')
    }
}
export const getPost=async(slug)=>{
    try{
        connectToDb()
        const post=await post.findOne({slug})
        return post
    }catch(err){
        console.log(err)
        throw new Error('Failed to fetch posts!')
    }
  
}
export const getUser=async(id)=>{
    noStore()
    try{
        connectToDb()
        const user=await User.findById(id)
        return user
    }catch(err){
        console.log(err)
        throw new Error('Failed to fetch user🤔')
    }
   
}
export const getUsers=async()=>{
    try{
        connectToDb()
        const users=await User.find()
        return users
    }catch(err){
        console.log(err)
        throw new Error('Failed to fetch users!')
    }
   
}
