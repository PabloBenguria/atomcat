'use strict';

const jwt = require('jwt-simple'),
	moment = require('moment'),
	config = require('../config/env');

exports.createToken = (user) => {
	const payload = {
		sub: user.id,
		nombre: user.nombre,
		email: user.email,
		avatar: user.avatar,
		role: user.role,
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix()
	};
	return jwt.encode(payload, config.TOKEN_SECRET);
};

exports.profileToken = (createToken) => {
	const decodePayload = jwt.decode(createToken, config.TOKEN_SECRET);
	const result = {
		nombre: decodePayload.nombre,
		email: decodePayload.email,
		avatar: decodePayload.avatar,
		role: decodePayload.role
	}
	return result;
};
				
