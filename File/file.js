const fs = require('fs');
const log = require("./../logger/logger");

const read = function (dir) {
    try {
        let val = JSON.parse(fs.readFileSync(dir));
        log('info' , 'read file successfully');
        return val;
    } catch(err){
        log('error' , 
            `an error was occurred while read from file:\n${err}`);
    }
}

const write = function(dir , message){
    try {
        fs.writeFile(dir, JSON.stringify(message , null , '\t') , 'utf8', 
            function(err){
                if (err) log('error' , 'callback');
            }
        );
        log('info' , 'The data write in file!');
        return true;
      } catch (err) {
        log('error' , 
        `an error was occurred while write to file:
        ${err}`);
      }finally{
          return false;
      }
}

module.exports = {read , write};