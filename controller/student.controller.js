const StudentModel=require('../model/student.model')
async function getStudents(req,res){
    const students = await StudentModel.find({})
    res.status(200).json(students)
}
async function getStudent(req,res){
    const {id} = req.params
        const student = await StudentModel.findById(id)
        if (!student) {
            res.status(404).json({ message: 'student with given id doesnt exists' })
        }
        res.status(200).json(student)
 }
async function postStudent(req,res){
        const { id, name, phone, email } = req.body
        const student = await StudentModel.create({
            _id: id,
            name,
            phone,
            email
        })
        res.status(200).json(student)
    }
    
async function putStudent(req,res){
        const {id} = req.params
        const student = await StudentModel.findByIdAndUpdate(id, req.body)
        if (!student) {
            res.status(404).json({ message: 'student with given id doesnt exists' })
        }
        const updatedStudent=await StudentModel.findById(id)
        res.status(200).json(updatedStudent)
    }
    
async function deleteStudent(req,res){
        const {id} = req.params
        const student = await StudentModel.findByIdAndDelete(id)
        if (!student) {
            res.status(404).json({ message: 'student with given id doesnt exists' })
        }
        res.status(200).json({ message: 'student with given id deleted' })
    }
module.exports={getStudents,getStudent,postStudent,putStudent,deleteStudent}