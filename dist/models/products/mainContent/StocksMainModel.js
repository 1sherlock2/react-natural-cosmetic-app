const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const StocksMainSchema = new Schema({
	image: String,
	text: String,
	oldPrice: Number,
	newPrice: Number
});

var StocksMainModel = exports.StocksMainModel = mongoose.model('StocksMain', StocksMainSchema);