const express =  require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())

const addbooks = require("./models/addBook")
app.get("/",(req,res)=>{

    res.send("hello")
})

app.post("/search",(req,res)=>{
    res.send("welcome")

})



app.post("/delete",(req,res)=>{
    res.send("delete")
})



app.post("/view",(req,res)=>{
    res.send("view")
})

app.listen(8081,()=>{
    console.log("server started")
})
