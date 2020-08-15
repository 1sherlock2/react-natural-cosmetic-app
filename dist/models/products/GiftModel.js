const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const GiftSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var GiftModel = exports.GiftModel = mongoose.model('Gift', GiftSchema);