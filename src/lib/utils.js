import mongoose from "mongoose";
const connection={}
export const connectToDb=async()=>{
    try{
        if(connection.isConnected){
            console.log("using Existing Connection")
            return;
        }
        const db=await mongoose.connect(process.env.Mongo)
        connection.isConnected=db.connections[0].readyState
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}