const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const MenSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var MenModel = exports.MenModel = mongoose.model('Men', MenSchema);