const file = require('./../File/file');
const log = require('./../logger/logger');

const data = 'data.json';

let polygons = file.read(data);

const getDataFile = function(){
    return polygons;
}

const getPolygons = function() {
	return polygons.features;
};

const addPolygon = function(polygon){
    if (!file.write(data , polygons)){
        return false;
    }
    polygons.features.push(polygon);
    log('info','new polygon added to database');
    return true;
};

module.exports = {
    getDataFile,
    getPolygons, 
    addPolygon
};
