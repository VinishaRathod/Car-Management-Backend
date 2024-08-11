const mongoose= require('mongoose')
const dotenv= require('dotenv')

dotenv.config();

const connectDB =async () => {
     try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database Connected");
        
     } catch (error) {
      console.log(error.message); 
     }
};
module.exports= connectDB;