const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const todolistRoutes = require('./routes/todolistRoute');

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/', todolistRoutes);

app.get('*', function(req, res) {
    res.status(400).send({message: 'Not Found, Sorry :)'});
});