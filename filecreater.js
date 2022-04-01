const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
// console.warn(dirPath);
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
// }
//fs.writeFileSync("hello.txt","hello world text content");
fs.readdir(dirPath,(error,files)=>{
    // console.warn(files);
    files.forEach((item)=>{
        console.warn("file name is ",item);
    })
});
