require("dotenv").config({path: './config/config.env'});
const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

if (process.env.NODE_ENV === "development"){
	app.use(morgan('dev'));
}
app.use(express.json());

app.engine('.hbs', exphbs.engine({defaultLayout: "main", extname: ".hbs"}));
app.set('view engine', '.hbs');

app.use('/', require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.listen(PORT, console.log(`listening on port ${PORT} using the environment: ${process.env.NODE_ENV}`));

