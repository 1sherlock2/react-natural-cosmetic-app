const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const PerfumerySchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var PerfumeryModel = (exports.PerfumeryModel = mongoose.model('Perfumery', PerfumerySchema));
