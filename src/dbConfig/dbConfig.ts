
import mongoose from "mongoose";


export async function dbConfig() {
    
    try {
        
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('mongoDb connected Successfully');  
        })

        connection.on('error',(error)=>{
            console.log('mongoDb connection error :' + error);
          process.exit()
        })

    } catch (error) {
        console.log(error,"something went wrong in connecting to db");
    }

}