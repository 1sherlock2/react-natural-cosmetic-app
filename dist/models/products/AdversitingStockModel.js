const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const AdversitingStockSchema = new Schema({
	src: String,
	url: String
});

var AdversitingStockModel = exports.ContentModel = mongoose.model('AdversitingStock', AdversitingStockSchema);