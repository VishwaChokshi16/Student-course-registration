// Register

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", async(e)=>{

e.preventDefault();

const data = {
name:document.getElementById("name").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value
};

await fetch('/students/register',{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

});

alert("Registration Successful");

});
}



// Login

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", async(e)=>{

e.preventDefault();

const data = {
email:document.getElementById("loginEmail").value,
password:document.getElementById("loginPassword").value
};

const res = await fetch('/students/login',{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)

});

if(res.ok)
window.location="dashboard.html";
else
alert("Invalid login");

});
}



// Load Courses

const table = document.getElementById("courseTable");

if(table){

fetch('/courses')
.then(res=>res.json())
.then(data=>{

data.forEach(course=>{

const row = `
<tr>
<td>${course.title}</td>
<td>${course.description}</td>
<td>
<button onclick="enroll('${course._id}')">
Enroll
</button>
</td>
</tr>
`;

table.innerHTML += row;

});

});

}



function enroll(courseId){

fetch('/enroll',{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
studentId:"123",
courseId:courseId
})

});

alert("Course Enrolled");

}