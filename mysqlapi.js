const express = require('express');
const Connection = require('mysql/lib/Connection');
const con=require('./connectmysql');
const app = express();
app.use(express.json());
app.get('/', (req, resp) => {
    con.query('select * from ac_table',(err,result)=>{
        if(err)
        {
            resp.send('error');
        }
        else{
            resp.send(result);
        }
    });
});

//insert to mysql
app.post('/',(req,resp)=>{
    const data=req.body;
    con.query('insert into ac_table SET ?',data,(error,result,fields)=>{
        if(error) error;
       resp.send(result);
    });
})

app.put('/:ac_table_id',(req,resp)=>{
    const data=[req.body.ac_no,req.body.bu,req.body.cu,req.body.vvpat,req.params.ac_table_id];
    con.query('update ac_table set ac_no=?,bu=?,cu=?,vvpat=? where ac_table_id=?',data,(error,result,fields)=>{
        if(error) error;
       resp.send(result);
    });
});

app.delete('/:ac_table_id',(req,resp)=>{
   const data= req.params.ac_table_id
    con.query('delete from ac_table where ac_table_id=?',data,(error,result,fields)=>{
        if(error) error;
        resp.send(result);
    });
   
})
app.listen(5000);
