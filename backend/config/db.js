const mongoose =require( "mongoose");

 const connectDb=async()=>{
  const MONGO_URL= "mongodb://yas0se:123456@mongodb:27017/finance?authSource=admin"
    try{
      await mongoose.connect(MONGO_URL||'', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
      console.log('Connected to MongoDB')
    }catch(error){
        console.error("Could not connect to MongoDB", error); 
    }
}


module.exports = connectDb ;