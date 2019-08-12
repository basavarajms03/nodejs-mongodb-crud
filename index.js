const express = require('express');
const routers = require('./controllers/routes');
const bodyParser = require('body-parser');

//Initialize express handlebars
const exphbs = require('express-handlebars');

//Initialize mongodb connection
require('./models/db');

const app = express();

//Initialize body-parser to convert url into json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//configure Express-handlebars in order to access the views
app.engine('hbs', exphbs({
    extname : 'hbs'
}));

app.set('view engine', 'hbs');

app.use('/', routers);

app.listen(8000, () => {
    console.log(`Server started on 8000`);
});