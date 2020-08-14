const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const MainContentSchema = new Schema({
	wrapperImgContent: [{ url: String, src: String }]
});

var MainContentModel = (exports.MainContentModel = mongoose.model('MainContent', MainContentSchema));
