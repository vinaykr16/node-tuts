const app=require('./app.js');
const x=10;
let result=app.arr.filter((item)=>{
    return item>5; 
})
console.log(result);
