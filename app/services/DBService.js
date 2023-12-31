import mongoose from "mongoose";

export const connectToDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "MY_DB"
        })
        console.log("Connected to Database");
    }catch(e){
        console.log("Error connecting to Database", db);
    }
}