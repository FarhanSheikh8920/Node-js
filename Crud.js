const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud')
const Filepath=`${dirpath}/apple.txt`
 fs.writeFileSync(Filepath,'this is a simple text file ') 
 fs.readFile(Filepath,'utf8',(err,item)=>{
console.log(item);
})
fs.appendFile(Filepath,"the file updated",(err)=>{
    if(!err){

        console.log("file has been updated")
    }
})
fs.rename(Filepath,`${dirpath}/samsung.txt`,(err)=>
{
    if(!err){
        console.warn('you file path updated',Filepath);
    }
}
)
fs.unlinkSync(`${dirpath}/samsung.txt`)