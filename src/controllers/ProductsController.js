//mainContentModels
const { WrapperImgContentModel } = require('../models/products/mainContent/WrapperImgContentModel');
const { ContentModel } = require('../models/products/mainContent/ContentModel');
const { NavigationProductModel } = require('../models/products/mainContent/NavigationProductModel');
const { StocksMainModel } = require('../models/products/mainContent/StocksMainModel');
const { AdversitingStockModel } = require('../models/products/mainContent/AdversitingStockModel');
//productsModels
const { StocksModel } = require('../models/products/StocksModel');
const { KoreaModel } = require('../models/products/KoreaModel');
const { PerfumeryModel } = require('../models/products/PerfumeryModel');
const { SkinCareModel } = require('../models/products/SkinCareModel');
const { MakeUpModel } = require('../models/products/MakeUpModel');
const { MenModel } = require('../models/products/MenModel');
const { AccessoriesModel } = require('../models/products/AccessoriesModel');
const { KidsModel } = require('../models/products/KidsModel');
const { GiftModel } = require('../models/products/GiftModel');
const { Router } = require('express');
const router = Router();
const upload = require('../middleware/imgStorage');

//wrapperImgContent
router.post('/wrapperImgContent', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new WrapperImgContentModel({
			src: data.src
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/wrapperImgContent', (req, res) => {
	WrapperImgContentModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//content
router.post('/content', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new ContentModel({
			src: data.src
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/content', (req, res) => {
	ContentModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//navigationProduct
router.post('/navigationProduct', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new NavigationProductModel({
			children: data.children
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/navigationProduct', (req, res) => {
	NavigationProductModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//stocksMain
router.post('/stocksMain', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new StocksMainModel({
			image: data.image,
			text: data.text,
			oldPrice: data.oldPrice,
			newPrice: data.newPrice
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/stocksMain', (req, res) => {
	StocksMainModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//adversitingStock
router.post('/adversitingStock', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new AdversitingStockModel({
			src: data.src
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/adversitingStock', (req, res) => {
	AdversitingStockModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

// stocks
router.get('/stocks', (req, res) => {
	try {
		StocksModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/stocks', upload.single('img'), (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');

		const post = new StocksModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			brend: data.brend
		});
		post.save().then(() => {
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
			res.status(200).json({ message: 'post was added' });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.delete('/stocks/:id', (req, res) => {
	try {
		StocksModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

//korea
router.get('/korea', (req, res) => {
	try {
		KoreaModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/korea', upload.single('img'), (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new KoreaModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
			res.status(200).json({ message: 'post was added' });
		});
	} catch (e) {
		console.log(e.message);
	}
});

router.delete('/korea/:id', (req, res) => {
	try {
		KoreaModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

//makeUp
router.get('/makeUp', (req, res) => {
	try {
		MakeUpModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/makeUp', (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new MakeUpModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.delete('/makeUp/:id', (req, res) => {
	try {
		MakeUpModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

//perfumery
router.get('/perfumery', (req, res) => {
	try {
		PerfumeryModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/perfumery', (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new PerfumeryModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.delete('/perfumery/:id', (req, res) => {
	try {
		PerfumeryModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

//skinCare
router.get('/skinCare', (req, res) => {
	try {
		SkinCareModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/skinCare', (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new SkinCareModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.delete('/skinCare/:id', (req, res) => {
	try {
		SkinCareModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

//men
router.get('/men', (req, res) => {
	try {
		MenModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/men', (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new MenModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});
router.delete('/men/:id', (req, res) => {
	try {
		MenModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

//accessories
router.get('/accessories', (req, res) => {
	try {
		AccessoriesModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/accessories', (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new AccessoriesModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.delete('/accessories/:id', (req, res) => {
	try {
		AccessoriesModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

//kids
router.get('/kids', (req, res) => {
	try {
		KidsModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/kids', (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new KidsModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});
router.delete('/kids/:id', (req, res) => {
	try {
		KidsModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});
//gift
router.get('/gift', (req, res) => {
	try {
		GiftModel.find().then((items) => {
			const totalCount = items.length;
			res.status(200).json({ items, totalCount });
		});
	} catch (e) {
		console.log(e.message);
	}
});
router.post('/gift', (req, res) => {
	try {
		const data = req.body;
		const string = req.file.path;
		const modernString = string.split('').splice(29).join('');
		const post = new GiftModel({
			name: data.name,
			img: modernString,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});
router.delete('/gift/:id', (req, res) => {
	try {
		GiftModel.deleteOne({ _id: req.params.id }).then((response) => {
			if (response) {
				res.status(200).json({ status: 'deleted' });
			} else {
				res.json({ status: 'somethink error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

module.exports = router;
