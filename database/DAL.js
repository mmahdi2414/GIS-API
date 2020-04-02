const fs = require('fs');
const log = require('./../logger/logger');

const data = '/../data.json';

let polygons;
try {
    polygons = JSON.parse(fs.readFileSync(data));
    log('info' , 'read file successfully')
} catch(err){
    log('error' , 
        `an error was occurred while read from file:
        ${err}`);
}
const getPolygons = function() {
	return polygonsGISData.features;
};

const addPolygon = function(polygon){
    polygonsGISData.features.push(polygon);
    addToFile(polygon);
    log('info','new polygon added to database');
};

function addToFile(polygon) {
    try {
        fs.writeFile(data, JSON.stringify(polygons) , 'utf8');
        log('info' , 'The polygon was appended to file!');
      } catch (err) {
        log('error' , 
        `an error was occurred while write to file:
        ${err}`);
      }
}


module.exports = {
    getPolygons, 
    addPolygon
};
