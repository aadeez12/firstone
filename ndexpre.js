// const a=[1,2,3,4,5];
// a.forEach(function(value,index){
//     return value+20;
// })
// const b= a.map(function(value,index){
//     return value+20;
// });

// console.log(b);
// const c= a.map((val,index) == val +1);
// const d= a.filter((value,index){
//     return value%2==0;
// });
// console.log(b);

// const b= a.find((val,index)==>
// {
//     return val>2;
// });
// console.log(b);
// const b = a.findIndex((val,index)==>
// {
//     return val>2;
// });
// console.log(b);
// const b = a.includes
// // const a=[1,2,3,4,5,6];
// // const b = a.reduce((a,b)==>{
// //     return a+b;

// // });
// // console.log(b);
const users=[
    {name:'alice',age:25},
    {name:'bob',age:23},
    {name:'rok',age:29}
]

const n=users.find((val)=>
{
    return val.name=='alice';
})

const student={
    name:'alice',
    age:25
}

localStorage.setItem('id',JSON.stringify(student));
const a = localStorage.getItem('id')
const b = JSON.parse(a);
console.log(b);
//stringify convert object to string
//parse convert string to object
//math methods
//round method
const ab=Math.round(2.4);
console.log(ab);
//ceil method
const cb=Math.ceil(2.6);
console.log(cb);
//floor method
const ad=Math.floor(2.8);
console.log(ad);
//random method
const d=((Math.random()*100).toFixed(2));
console.log(d);