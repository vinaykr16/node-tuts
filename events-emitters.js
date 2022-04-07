const express=require('express');
//EventEmitter is a class, so first letter should be capital
const EventEmitter=require('events');
const app=express();

//creating object of event
const event=new EventEmitter();
let count=0;
event.on('countAPi',()=>{
    count++;
    console.log('event called',count);
});

app.get('/',(req,resp)=>{
        resp.send('home api called');
        //event will generate
        event.emit('countAPi');
});

app.get('/search',(req,resp)=>{
    resp.send('search api called');
    //event will generate
    event.emit('countAPi');
});

app.get('/update',(req,resp)=>{
    resp.send('update api called');
    //event will generate
    event.emit('countAPi');
});

app.listen(5000);