const express=require ("express")
const cors=require("cors")
const mongoose=require("mongoose")



const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "chat" })
 .then(()=>console.log('database connected'))
 .catch((err)=>console.log(err))

const server=app.listen(process.env.PORT,()=>{
    console.log('Server Started');
})