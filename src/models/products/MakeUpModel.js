const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const MakeUpSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var MakeUpModel = (exports.MakeUpModel = mongoose.model('MakeUp', MakeUpSchema));
