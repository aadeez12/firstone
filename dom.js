
const ab=document.getElementById("ab");
console.log(ab);
const ac=(document.createElement("div").innerHTML="abd");


console.log(ac);


ab.append(ac);

const ad=document.getElementById("ab");
console.log(ad);
const ae=(document.createElement("div").innerHTML="lol");


console.log(ae);


ad.prepend(ae);

const ba=document.getElementById("ab");
console.log(ba);
const bb=(document.createElement("div").innerHTML="cj");


console.log(bb);


ba.before(bb);

const ca=document.getElementById("ab");
console.log(ca);
const bc=(document.createElement("div").innerHTML="klr");


console.log(bc);


ca.after(bc);
//apend
//prepand
//before
//after
//domcompleted

// setTimeout(()=>
// {console.log("welcome");},3000
// );


// setInterval(()=>
// {console.log("fir se");},2000);
 const students = {
    name:"John",
                    age:20,

                    class:10,

                    rollno:12
 }
 const conn =JSON.stringify(students);
 console.log("conn",conn)

 const data=localStorage.setItem("students",conn);

 const studen =[
    {
        gread
    }
 ]
 studen.array.forEach(element => {
    console.log(element.name);
    
 });