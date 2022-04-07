const express=require('express');
require('./config');
const Product=require('./products');

const app=express();
//for getting data from post body.
app.use(express.json());
//ablove line will enable node to get request data in json
app.post('/create',async (req,resp)=>{
    let data=new Product(req.body);
    let result=await data.save();
    // console.log(req.body);
    resp.send(result);
});

app.get('/list',async (req,resp)=>{
    let data=await Product.find({name:'vinay kumar new'});
    resp.send(data);
});

app.delete('/delete/:_id',async (req,resp)=>{
    let data=await Product.deleteOne(req.params);
    resp.send(data);
});

app.put('/update/:_id',async (req,resp)=>{
    let data=await Product.updateOne(
        req.params,//condition
        {
            //updated data
            $set:req.body
        }
    );
    resp.send(data);
});
app.listen(5000);