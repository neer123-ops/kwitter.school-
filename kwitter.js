function addUser(){
    studentname=document.getElementById("student_name").value;
    localStorage.setItem("student_name", studentname );
    window.location = "kwitter_room.html"
}

