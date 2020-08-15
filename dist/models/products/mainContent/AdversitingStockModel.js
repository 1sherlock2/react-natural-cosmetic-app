const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const AdversitingStockSchema = new Schema({
	src: String
});

var AdversitingStockModel = exports.AdversitingStockModel = mongoose.model('AdversitingStock', AdversitingStockSchema);