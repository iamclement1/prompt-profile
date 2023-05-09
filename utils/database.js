import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () =>{
   mongoose.set('strictQuery', true);
   if(isConnected){
      console.log("MongoDb is connected");
      return;
   }
   try {
      await mongoose.connect(process.env.MONGODB_URI, {
         dbName: "public-profile",
         useNewUrlParser: true,
         useUnifiedTopology: true 
      })
      isConnected = true;
      console.log("MongoDb is connected");
   } catch (error) {
      console.log(error); 
   }
}