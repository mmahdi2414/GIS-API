const express = require('express');
const log = require('../logger/logger');
const service = require('./service');
const {check, validationResult} = require('express-validator');
const geometry = require('./../geometry/polygon');

const router = express.Router();
const checks = [check('long').isFloat(),check('lat').isFloat()];
const errorFormatter = ({ location, msg, param}) => {
    return ` ${param} -> ${msg} `;
  };

router.use(function(req, res, next) {
    log('info' , `new ${req.method} request on ${req.originalUrl}`);
    next();
});

router.use('/testpoint', function(req, res, next) {
    if(req.method.toString() !== "GET"){
        log('error' , `${req.method} is not correct for ${req.originalUrl}`);
	    return res.status(400).json({message: "Bad Request (request method error)"});
    }
    next();
});

router.use('/addpolygon', function(req, res, next) {
    if(req.method.toString() !== "PUT"){     
        log('error' , `${req.method} is not correct for ${req.originalUrl}`);
	    return res.status(400).json({message: "Bad Request (request method error)"});
    }
    next();
});


router.get('/testpoint', checks, function(req, res) {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()){
        log('error' , `Unprocessable Entity\n${errors.array()}`);
	    return res.status(400).json({message: "Bad Request (params error)"});
    }
	const point = [req.query.long, req.query.lat];
	return res.status(200).json(re);
});

router.put('/addpolygon', function(req, res){
	const polygon = req.body;
	if (geometry.isGeoJson(polygon) && geometry.isPolygon(polygon.geometry) ) {
        if (!service.addPolygon(polygon))
        {
            return res.status(500).json({message: "Internal Server Error (write error)"});
        }
        return res.status(200).json(service.getDataFile);
    }
    return res.status(400).json({message: "Bad Request"});

});


module.exports = router;