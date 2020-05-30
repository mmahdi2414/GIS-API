let database = require('../database/DAL');
let Point = require('../geometry/point');

const getPolygons = function(){
    return database.getPolygons();
}

const getCoveredPolygon = function(point) {
    let res = [];
    let polygons = database.getPolygons();
    polygons.forEach(polygon =>{
        let coordinates = polygon.geometry.coordinates[0];
        let name = polygon.properties.name;
        if(Point.isInsidePolygon(point, coordinates)){
            res.push(name);
        }
    });
    return res; 
    
};

const addPolygon = function(polygon) {
 database.addPolygon(polygon);
};

const getDataFile = () => {
    return database.getDataFile();
}

module.exports = {
 addPolygon, getCoveredPolygon ,getPolygons ,getDataFile
};
