const express = require("express");
const dbConnection=require('./mongodbconnection');
const app=express();
//for fetching post data from api
app.use(express.json());

app.get('/',async (req,resp)=>{
    let data=await dbConnection();
    data=await data.find().toArray();
    console.log(data);
    resp.send(data)
});

// post api
app.post('/',async (req,resp)=>{
   console.log(req.body);
   let data=await dbConnection();
   //insert data
//    let result=await data.insert(req.body);

   //delete data
   const result=await data.deleteMany({
    name:'vinay kumar new',
    })
    resp.send(result);
})
app.listen(5000);
