const express = require('express');
const log = require('../logger/logger');
const service = require('./service');
const { check, validationResult } = require('express-validator');
const geometry = require('./../geometry/polygon');

const router = express.Router();

router.use(function(req, res, next) {
    log('info' , `new ${req.method} request on ${req.path}`);
    next();
});

router.get('/testpoint', [
	check('long').exists(),
    check('lat').exists(),
    check('long').isFloat(),
    check('lat').isFloat()
], function(req, res) {
    const error = validationResult(req);
    if (!error.isEmpty()){
        log('error' , "Bad Request");
        return res.status(422).json({ errors: errors.array() });
    }
	const point = [req.query.long, req.query.lat];
	const result = service.getCoveredPolygon(point);
	res.status(200).send(result);
});

router.put('/addpolygon', function(req, res){
	const polygon = req.body;
	if (!geometry.isGeoJson(polygon) || !geometry.isPolygon(polygon.geometry) ) {
		res.status(400).send("Bad Request");
    }
    else {
	    service.addPolygon(polygon);
        res.status(200).send(JSON.stringify(service.getPolygons(), null, '\t'));
    }
})


module.exports = router;