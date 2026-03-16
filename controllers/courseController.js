const Course = require('../models/Course');

exports.getCourses = async(req,res)=>{

try{

const courses = await Course.find();
res.json(courses);

}catch(err){
res.status(500).json(err);
}

};

exports.addCourse = async(req,res)=>{

try{

const course = new Course(req.body);
await course.save();

res.json(course);

}catch(err){
res.status(500).json(err);
}

};