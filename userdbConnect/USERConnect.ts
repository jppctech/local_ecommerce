import mongoose from "mongoose";

export async function USERconnect(){
    try{
            mongoose.connect(process.env.USER_URI!)
            const connection = mongoose.connection

            connection.on('connected', () => {
                console.log('MmngoDB connected');
            })

            connection.on('error', (err) =>{
                console.log('MongoDB connection error please make sure db is up and running:' +err);
                process.exit()
            })


    } catch (error) {
        console.log("Something went wrong in connecting to DB");
        console.log(error);
    }
} 