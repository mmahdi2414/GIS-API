const fs = require('fs');

const read = function (dir) {
    try {
        let val = JSON.parse(fs.readFileSync(dir));
        log('info' , 'read file successfully');
        return val;
    } catch(err){
        log('error' , 
            `an error was occurred while read from file:
            ${err}`);
    }
}

const write = function(dir , message){
    try {
        fs.writeFile(dir, JSON.stringify(message) , 'utf8');
        log('info' , 'The data write in file!');
      } catch (err) {
        log('error' , 
        `an error was occurred while write to file:
        ${err}`);
      }
}

module.exports = {read , write};