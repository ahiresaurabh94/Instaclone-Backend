const mongoose =require("mongoose")

mongoose.set("strictQuery",false)

const db = ()=>{
    return mongoose.connect("mongodb+srv://root:Saurabh0094@cluster0.n0dzfil.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        //mongodb+srv://Aro:aro123@arockiajeyson.aswzaya.mongodb.net/?retryWrites=true&w=majority
        console.log("CONNECTED")
    }).catch((e)=>{
        console.log(e.message)
    })
    
}
module.exports=db;