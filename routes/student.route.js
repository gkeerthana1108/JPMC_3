const express = require('express')
const routes = express.Router()
// routes.get('/',(req,res)=>{
//     res.status(200).send("Student acces from route")
// })
// routes.get('/:id',(req,res)=>{
//     res.status(200).send("Student with ID")
// })

routes.use(express.json())
routes.use(express.urlencoded({ extended: true }))

const StudentModel = require("../model/student.model")

// routes.get('/', (req, res) =>{

//     res.send("Welcome");
// })

// routes.get('/', async(req, res) => {
//     console.log("Get Students")
//     const students = await StudentModel.find({})
//     res.status(200).json(students)
// })


// routes.get('/:id', async(req, res) => {
//     const {id} = req.params
//     const student = await StudentModel.findById(id)
//     if (!student) {
//         res.status(404).json({ message: 'student with given id doesnt exists' })
//     }
//     res.status(200).json(student)
// })

// routes.post('/', async (req, res) => {
//     const { id, name, phone, email } = req.body
//     const student = await StudentModel.create({
//         _id: id,
//         name,
//         phone,
//         email
//     })
//     res.status(200).json(student)
// })

// routes.put('/:id', async (req, res) => {
//     const {id} = req.params
//     const student = await StudentModel.findByIdAndUpdate(id, req.body)
//     if (!student) {
//         res.status(404).json({ message: 'student with given id doesnt exists' })
//     }
//     const updatedStudent=await StudentModel.findById(id)
//     res.status(200).json(updatedStudent)
// })

// routes.delete('/:id', async (req, res) => {
//     const {id} = req.params
//     const student = await StudentModel.findByIdAndDelete(id)
//     if (!student) {
//         res.status(404).json({ message: 'student with given id doesnt exists' })
//     }
//     res.status(200).json({ message: 'student with given id deleted' })
// })
const {getStudents,getStudent,postStudent,putStudent,deleteStudent}=require('../controller/student.controller')
routes.get('/',getStudents)
routes.get('/:id',getStudent)
routes.post('/',postStudent)
routes.put('/:id',putStudent)
routes.delete('/:id',deleteStudent)

module.exports = routes