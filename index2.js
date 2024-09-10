// console.log(process.argv)//argument vector
const fs = require('fs')
const input = process.argv;
{
input[2]=='add'?
    fs.writeFileSync(input[3],input[4]):
    input[2]=='remove'?
    fs.unlinkSync(input[3],input[4]):
    console.log('wrong input')
}
