const fs = require('fs');
const readstream = fs.createReadStream('./doc/bigdata.txt');
const writestream = fs.createWriteStream('./doc/bigdatawrite.txt');
// readstream.on('data', (chunk)=>{
//     console.log("----NEW CHUNK----");
//     console.log(chunk);
//     writestream.write("\n----NEW CHUNK----\n");
//     writestream.write(chunk);
// })

readstream.pipe(writestream);

// var buffer = Buffer.alloc(10);
// buffer.write("Ayush");
// console.log(buffer.toString());
// for(let i = 0; i < 10; i++) {
//     console.log(buffer[i]);
// }