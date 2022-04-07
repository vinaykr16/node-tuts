const dbConnection=require('./mongodbconnection');

const updateData=async ()=>{
    const data=await dbConnection();
    const result=await data.update(
        {name:'max pro'},{
            $set:{name:'max pro 56',price:56}
        }
    );
    console.log(result);
};
updateData();
