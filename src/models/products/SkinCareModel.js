const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const SkinCareSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String,
	text: Array
});

var SkinCareModel = (exports.SkinCareModel = mongoose.model('SkinCare', SkinCareSchema));
