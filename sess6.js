const fs = require('fs');
const path = require('path');


/* 
    CRUD ->
    Create -> create the file (write)
    Read -> read the file
    Update -> overWrite the file or append the file
    Delete -> delete the file
*/

// console.log(path.join(__dirname, 'impFiles', 'file1.txt'));


// console.log(path.join(__dirname, '..', 'impFiles', 'file1.txt'));
fs.writeFile(path.join(__dirname, 'impFiles', 'file1.txt'), 'My first write', ()=>{
    
})