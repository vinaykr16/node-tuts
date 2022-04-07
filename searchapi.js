const express=require('express');
require('./config');
const Product=require('./products');
const app=express();
//for getting data from post body.
app.use(express.json());

app.get('/search/:key',async (req,resp)=>{
    let data=await Product.find({
        "$or":[
            //search will happen on name and brand fields
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
        ]
    });
    resp.send(data);
});
app.listen(5000);