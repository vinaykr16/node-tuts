const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
const filepath=`${dirPath}/hello0.txt`;
fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err) console.warn("file is renamed !!");
});
// console.warn(dirPath);