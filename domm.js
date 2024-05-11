const b = document.querySelector('.ac').innerHTML="rar";



console.log(b);

const c = document.querySelector('.ac').innerHTML="<h1>ror</h1>";



console.log(c);

const d = document.querySelector('#ab').innerHTML="igi";



console.log(d);

const ab=document.getElementById("ab");
const ac=(document.createElement("div").innerHTML="<h1>abd</h1>");
console.log(ab);

console.log(ac);


ab.append(ac);
//apend
//prepand
//before
//after
//domcompleted

setTimeout(()=>
{console.log("welcome");},3000
);


setInterval(()=>
{console.log("fir se");},2000);

