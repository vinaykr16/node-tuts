const dbConnection=require('./mongodbconnection');
const insert=async ()=>{
    const db=await dbConnection();
    const result=await db.insert(
        [
            {name:'note 5',brand:'vivo',price:320,category:'mpbile'},
            {name:'note 6',brand:'vivo',price:320,category:'mpbile'},
            {name:'note 7',brand:'vivo',price:320,category:'mpbile'},
        ]
    );
    if(result.acknowledged)
    {
        console.log("data inserted..");
    }
   
}

insert();