const Student = require('../models/Student');

// Register student
exports.registerStudent = async (req, res) => {

try{

const student = new Student(req.body);
await student.save();

res.json({message:"Student registered successfully"});

}catch(err){
res.status(500).json(err);
}

};


// Login student
exports.loginStudent = async (req, res) => {

try{

const student = await Student.findOne({
email:req.body.email,
password:req.body.password
});

if(student)
res.json(student);
else
res.status(401).json({message:"Invalid login"});

}catch(err){
res.status(500).json(err);
}

};