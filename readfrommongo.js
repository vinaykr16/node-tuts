const dbConnection=require('./mongodbconnection');


// dbConnection().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.warn(data)
//     })
// })

const main=async ()=>{
    let data=await dbConnection();
    data=await data.find().toArray();
    console.warn(data);
}

main();