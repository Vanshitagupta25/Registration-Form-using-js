function validateForm(){
  document.getElementById("nameError").innerHTML="";
  document.getElementById("genderError").innerHTML="";
  document.getElementById("emailError").innerHTML="";
  document.getElementById("skillsError").innerHTML="";
  document.getElementById("cityError").innerHTML="";
  var
  fullName=document.getElementById("fullName").value;
  var
  gender=document.querySelector('input[name="gender"]:checked');
  var email=document.getElementById("email").value;
  var
  skills=document.querySelectorAll('input[name="skills"]:checked');
  var city=document.getElementById("city").value;
  if(fullName==""){
  document.getElementById("nameError").innerHTML
  ="Full name is required";
  return false;
  }
  if(!gender){
  document.getElementById("genderError").innerHTML=
  "Please select a gender";
  return false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
  document.getElementById("emailError").innerHTML="Invalid email id";
  return false;
  }
  if(skills.length==0){
  document.getElementById("skillsError").innerHTML=
  "Select at least one skills";
  return false;
  }
  if(city==""){
  document.getElementById("cityError").innerHTML="Select a city";
  return false;
  }
  return true;
  }