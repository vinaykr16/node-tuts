const mongoose=require('mongoose');
//schemas is used to define fields. Validation can be done with schemas. model use schemas and connect node js and mongo DB
 mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSch=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDb=async ()=>{
    const ProductModel=mongoose.model('products',ProductSch);
    let data=new ProductModel({
        name:"Max pro 14",
        price:2000,
        brand:"Apple",
        category:"mobile"
    });

    let result=await data.save();
    console.log(result);
}

const upDateInDb=async ()=>{
    const Product=mongoose.model('products',ProductSch);
    let data=await Product.updateOne(
        {name:'Max pro 13'},
        {
            $set:{price:97,name:"vinay mobile"}
        }
    )
    console.log(data);
}

const deleteFromDb=async()=>{
    const Product=mongoose.model('products',ProductSch);
    let data=await Product.deleteOne(
        {name:'Max pro 14'}
    );
    console.log(data);

}

const findInDb=async()=>{
    const Product=mongoose.model('products',ProductSch);
    let data=await Product.find(
        // {name:'Max pro 12'}
    );
    console.log(data);

}


findInDb();