const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/healthly', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('mongo connected');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log('port 3000 connected');
});