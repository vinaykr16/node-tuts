const express=require('express');
const app=express();

app.get('',(req,res)=>{
     res.send(`
     <h1>Welcome ${req.query.name}</h1>
     <a href="/about">Click to go to about</a>
     `); 
});

app.get('/about',(req,res)=>{
    // pass parameter in url of about like /about?name=sam
    res.send(`
    <input type=text name="name" placeholder="Enter name" value="${req.query.name}"/>
    <button>Send</button>
    <a href="/">Go to home</a>
    `); 
});

app.get('/help',(req,res)=>{
    res.send([
        {
            name:'vinay',
            add:'noida'
        },
        {
            name:'kumar',
            add:'delhi'
        }
    ]); 
});

app.get('/career',(req,res)=>{
    res.send('Welcome, this is career page'); 
});

app.listen(5000);