'use strict';

const jwt = require('jwt-simple');
const	moment = require('moment');
const	config = require('../../config/env');
const service = require('../../services/services');

exports.ensureAuthenticated = (req, res, next) => {
	if(!req.headers.authorization){
		return res
			.status(403)
			.send({
				message: 'Sin autorización.'
		})
	}
	const token = req.headers.authorization.split(' ')[1];
	const decodeToken = jwt.decode(token, config.TOKEN_SECRET);
	if(decodeToken.exp <= moment().unix()){
		return res
			.status(401)
			.send({
				message: 'El token ha expirado.'
			})
	}
	req.user = decodeToken.sub;
	next();
};

exports.registerAllowed = (req, res, next) => {
	const token = req.headers.authorization.split(' ')[1];
	const decodeToken = jwt.decode(token, config.TOKEN_SECRET);
	if(decodeToken.role !== 'admin'){
		return res
			.status(403)
			.send({
				message: 'Sin autorización.'
		});
	};
	next();
};

