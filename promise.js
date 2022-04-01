let a=10;
let b=0;


let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(b=70);
        // b=20;
    },2000);
});

waitingData.then((data)=>{
b=data;
let result=a+b;
console.log(result);
})

//promise wait for interval and then print result. Promise can be used to handle asynchronous data in node js
