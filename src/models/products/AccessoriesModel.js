const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const AccessoriesSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var AccessoriesModel = (exports.AccessoriesModel = mongoose.model('Accessories', AccessoriesSchema));
