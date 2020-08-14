const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const KoreaSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var KoreaModel = (exports.KoreaModel = mongoose.model('Korea', KoreaSchema));
