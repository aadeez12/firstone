const object={
    name:'John',
    age:20,
    gender:'male'
}
localStorage.setItem('object',JSON.stringify(object))

const obj=JSON.parse(localStorage.getItem('object'))
console.log(obj.name)

localStorage.setItem
localStorage.getItem
localStorage.removeItem
//.stringify convert obj to string
//.parse convert string to object
//we can not get data from json
//we have to convert data in to obj to get the data
