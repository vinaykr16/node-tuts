const dbConnection=require('./mongodbconnection');
 const deleteData=async ()=>{
     const data=await dbConnection();
     const result=await data.deleteMany({
        name:'note 7',
     })
     console.warn(result);
 };
 
 deleteData();