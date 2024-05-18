const express=require('express')
const mongoose=require('mongoose')
const app=express()

require('dotenv').config()

const port=process.env.PORT

// app.get("/",(req,res)=>{
//    res.status(200).send("Home page")
// })
// app.get('/api/students',(req,res)=>{
//     res.status(200).send("Students")
// })

const studentRoutes = require('./routes/student.route')
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/students', studentRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/testjp')
.then(()=>console.log("connection successful"))

app.get('/', (req, res) =>{
    res.json({message: "Root Page"})
})

app.listen(port,()=>{
    console.log(`Server started and listening at ${port}`)
})
