const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
const filepath=`${dirPath}/hello0.txt`;
fs.appendFile(filepath,' Updation to this file comes here !!',(err)=>{
    if(!err) console.warn("file is updated");
});
