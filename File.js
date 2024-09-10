const fs = require('fs')
const path=require('path');
const dirfile=path.join(__dirname,"file")
for(i=0;i<5;i++){
  fs.unlinkSync(dirfile+"/hello"+i+".txt","hey you")
}
  fs.readdir(dirfile,(err,file)=>{
file.map((key,item)=>{
console.log(item)
})
}
)