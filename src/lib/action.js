"use server"
import { Post, User } from "./Modles"
import {signIn, signOut } from "./auth"
import { connectToDb } from "./utils"
import {revalidatePath} from 'next/cache'
import bcrypt from "bcryptjs";
export const AddPost=async(PrevState,formData)=>{
    // const title=formData.get('title')
    // const desc=formData.get('desc')
    // const slug=formData.get('slug')
    // const userId=formData.get('userId')
    const{title,desc,slug,userId,img}=Object.fromEntries(formData)
    try{
        connectToDb()
        const newPost=new Post({
            title,desc,slug,userId,img
        })
        await newPost.save()
        console.log('save to db')
        revalidatePath('/blog')
        revalidatePath('/admin')
    }catch(err){
        console.log(err)
        return {err:'something went wrong'};
    }
}
export const DeletePost=async(formData)=>{
    const{id}=Object.fromEntries(formData)
    try{
        connectToDb()
        await Post.findByIdAndDelete(id)
        console.log('deleted from db')
        revalidatePath('/blog')
        revalidatePath('/admin')
    }catch(err){
        console.log(err)
        return {err:'something went wrong'};
    }
}
export const AddUser=async(prevState,formData)=>{
    const{username,email,password,img,isAdmin}=Object.fromEntries(formData)
    try{
        connectToDb()
        const user=await User.findOne({username})
        if(user){
            return {error:"Username already exist"}
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)
        const newUser=new User({
            username,
            email,
            password:hashedPassword,
            img,
            isAdmin
        })
        await newUser.save()
        console.log('save to db')
        revalidatePath('/admin')
    }catch(err){
        console.log(err)
        return {err:'something went wrong'};
    }
}
export const DeleteUser=async(formData)=>{
    const{id}=Object.fromEntries(formData)
    try{
        connectToDb()
        await Post.deleteMany({userId:id})
        await User.findByIdAndDelete(id)
        console.log('deleted from db')
        revalidatePath('/admin')
    }catch(err){
        console.log(err)
        return {err:'something went wrong'};
    }
}
export const HandleGithubLogin=async()=>{
    "use server"
    await signIn('github')
}
export const HandleLogout=async()=>{
    "use server"
    await signOut()
}
// export const HandleGoogleLogin=async()=>{
//     "use server"
//     const callbackUrl=`${process.env.AUTH_URL}/callback/google`
//     // console.log(callbackUrl)
//     await signIn('google',{callbackUrl})
// }
// export const HandleGoogleLogout=async()=>{
//     "use server"
//     await signOut()
// }
export const register=async(PreviousState,formData)=>{
    const{username,email,password,passwordRepeat,img}=Object.fromEntries(formData)

    if(password!==passwordRepeat){
        return {error:"Password don't Match"}
    }
    try{
        connectToDb()
        const user=await User.findOne({username})
        if(user){
            return {error:"Username already exist"}
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)
        const newUser=new User({
            username,
            email,
            password:hashedPassword,
            img,
        })
        await newUser.save()
        console.log('save to db')
        return {success:true}
    }catch(err){
        console.log(err)
        return {error:"something went wrong"}
    }
}
export const login=async(prevState,formData)=>{ 
    const{username,password}=Object.fromEntries(formData)
    try{
        await signIn('credentials',{username,password})
    }catch(err){
        console.log(err)
        if(err.message.includes("CredentialsSignin")){
            return {error:"Invalid username or password"}
        }
        throw err;
    }
}