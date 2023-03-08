const mongoose=require('mongoose');


const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB connected: ${connect.connection.host}`);
    }catch(e){
        console.log("error", e);
        process.exit(1);
    }
}

module.exports=connectDB;