const express=require("express")
const catogary = require("./routes/Catogary")
const app=express()
const port=4000
const cors=require("cors")
app.use(cors({
    origin:"*"
}))

app.use("/user",catogary)
app.listen(port,()=>{
    try{
        console.log(`the server is running on port no ${port}`)
    }
    catch(err){
    console.log(err)
    }
})