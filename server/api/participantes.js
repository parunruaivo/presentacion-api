import Participante from '../models/participantes';

exports.showAll = function (req, res) {
	Participante.find({})
		.select('-__v')
		.exec(function (err, participantes) {
			if (err) return handleError(res, err);
			res.status(200).json(participantes);
		});
};

exports.create = function (req, res) {
	var newParticipante = new Participante(req.body);
	newParticipante.save(function (err) {
		if (err) return validationError(res, err);
		res.status(200).end();
	});
};

exports.showOne = function (req, res, next) {
	Participante
		.findOne({_id: req.params.id})
		.select('-__v')
		.exec(function (err, participante) {
			if (err) return next(err);
			if (!participante) return res.status(401).end();
			res.status(200).json(participante);
		});
};

var validationError = function (res, err) {
	return res.status(422).json(err);
};

function handleError(res, err) {
	return res.status(500).send(err);
}
