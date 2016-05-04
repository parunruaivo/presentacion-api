import { Router } from 'express';
var controller = require('./participantes');

export default function() {
	var api = Router();

    api.get('/participantes', controller.showAll);
    api.get('/participantes/:id', controller.showOne);
    api.post('/participantes/',controller.create);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	return api;
}
