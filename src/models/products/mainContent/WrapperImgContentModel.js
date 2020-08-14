const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const WrapperImgContentSchema = new Schema({
	src: String
});

var WrapperImgContentModel = (exports.WrapperImgContentModel = mongoose.model(' WrapperImgContent', WrapperImgContentSchema));
