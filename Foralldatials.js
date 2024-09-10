//who so by dafault feature its called mudules its all are core module
const fs= require('fs').writeFileSync;//if we want take individule file include so it is
console.warn("ashu")// it is module and global module also 
fs.writeFileSync("hellowolrd","ashu here");// we have to import file system beacuse its non global module 




// for export in node
module.exports={
    x:20,y:30,
    z:function(){
        return 10;
    }
}
//sever create and print it
const http = require('http')








http.createServer((req,resp) => {
resp.write('hellp world');
resp.end();
}).listen(4500)
