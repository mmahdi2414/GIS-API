const file = require('./../File/file');
const log = require('./../logger/logger');

const data = '/../data.json';

let polygons = file.read(data);

const getPolygons = function() {
	return polygonsGISData.features;
};

const addPolygon = function(polygon){
    polygonsGISData.features.push(polygon);
    file.write(data , polygons);
    log('info','new polygon added to database');
};

module.exports = {
    getPolygons, 
    addPolygon
};
