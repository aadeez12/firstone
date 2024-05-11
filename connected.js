const error= document.getElementById("error");
const fname=document.getElementById("fname");
const email= document.getElementById("email");
const password=document.getElementById("password");
const btn=document.getElementById("submit");

btn.addEventListener("click",()=>{

let messages =[];
if(fname.value ===""){
    messages.push("Name is required");
}
if(email.value ===""){
    messages.push("Email is required");
}else if (!email.value.includes("@")) {
    messages.push("enter valid email ")
}
if(password.value ===""){

    messages.push("Password is required");
}
if(messages.length>0){
    error.innerText=messages.join(",");
}
else{
    error.innerText="";
}


})