const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const healthlyController = require('./controllers/healthly.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/healthly', healthlyController);

mongoose.connect('mongodb://localhost:27017/healthly', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('mongo connected');
});

app.listen(3000, () => {
    console.log('port 3000 connected');
});