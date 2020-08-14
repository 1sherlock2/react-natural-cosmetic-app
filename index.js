const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const login = require('./src/controllers/LoginController');
const products = require('./src/controllers/ProductsController');
const app = express();
const config = require('config');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const PORT = config.get('port');
const mongoUri = config.get('mongoUri');

app.use('/uploads', express.static('uploads'));
app.use(cookieParser());
app.use(session({ secret: 'ssshhh', saveUninitialized: true, resave: true }));
let urlencodedFalse = bodyParser.urlencoded({ extended: false });
let bodyParserJsonTrue = bodyParser.json({
	inflate: true,
	strict: true
});
app.use(cors({ credentials: true, origin: true }));

// routers
app.use('/api', urlencodedFalse, bodyParserJsonTrue, login);
app.use('/products', urlencodedFalse, bodyParserJsonTrue, products);

mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true
});

app.listen(PORT, () => {
	console.log(`server was started in ${PORT} port`);
});

// app.use(cors({ credentials: true, origin: true, allowedHeaders: ['Content-Type', 'Authorization'] }));

// if (process.env.NODE_ENV === 'production') {
// 	app.use('/', express.static(path.join(__dirname, 'mern_study_react', 'build')));
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'mern_study_react', 'build', 'index.html'));
// 	});
// }
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
// 	if (req.method === 'OPTIONS') {
// 		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
// 		return res.status(200).json({});
// 	}
// 	next();
// });
