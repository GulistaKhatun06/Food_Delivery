import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://gulistakhatunqw:umuBvTQ2CxoI2Pey@cluster0.zp7k6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> console.log("DB Connected"))
}