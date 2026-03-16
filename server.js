const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve frontend
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/courseDB')
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enroll', enrollmentRoutes);

app.listen(5000, () => {
console.log("Server running at http://localhost:5000");
});