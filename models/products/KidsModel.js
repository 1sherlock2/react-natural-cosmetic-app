const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const KidsSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var KidsModel = (exports.KidsModel = mongoose.model('Kids', KidsSchema));
