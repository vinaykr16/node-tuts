const express=require('express');
const path=require('path');
const reqFilter=require('./middleware');
const route=express.Router();
const app=express();
const publicpath=path.join(__dirname,'public');
// app.use(express.static(publicpath));

app.set('view engine','ejs');

route.use(reqFilter);
//middleware for single route
app.get('',reqFilter,(_,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)
});

app.get('/about-me',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
});

route.get('/profile',(_,resp)=>{
    const user={
        name:'Vinay kumar',
        email:'vinay@gmail.com',
        country:'india',
        skills:['php','js','html','AWS','java']
    }
    resp.render('profile',{user});
});
route.get('/login',(_,resp)=>{
    resp.render('login');
});
app.use('/',route);

// if any of rout is not found, then * will implememted. Its for route not found error page
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/notfound.html`)
});
// console.log(publicpath);
app.listen(5000);