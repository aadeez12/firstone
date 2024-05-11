const btn=document.getElementById('click')
console.log(btn)
btn.addEventListener('click',()=>{
    console.log('click')
})
btn.addEventListener('click',()=>{
    console.log('clicked 123')
})
btn.addEventListener('mouseover',()=>{
    console.log('mouseover')
})
btn.addEventListener('mouseout',()=>{
    console.log('mouseout')
})