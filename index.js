const http=require('http')
/* const data=require('./Data') */
 const data2=require('./Data2')
/* http.createServer((req,resp)=> {
    resp.writeHead(200,{'contect-Type': 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000) */
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    resp.write(JSON.stringify(data2));
    resp.end();
}).listen(4000)





// const fs=require('fs');
// const path=require('path');
// const difpath=path.join(__dirname,'crud')
// const Filepath=`${path}/apple.txt`
// fs.writeFileSync(Filepath,'this is a simple text file ')