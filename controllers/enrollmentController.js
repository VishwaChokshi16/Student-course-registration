const Enrollment = require('../models/Enrollment');

exports.enrollCourse = async(req,res)=>{

try{

const enroll = new Enrollment(req.body);
await enroll.save();

res.json({message:"Course enrolled successfully"});

}catch(err){
res.status(500).json(err);
}

};