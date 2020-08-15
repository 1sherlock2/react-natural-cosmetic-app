const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const ContentSchema = new Schema({
	src: String,
	url: String
});

var ContentModel = exports.ContentModel = mongoose.model('Content', ContentSchema);