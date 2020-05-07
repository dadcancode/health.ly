const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const healthlyController = require('./controllers/healthly.js');

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/healthly';

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('mongo connected');
});

mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/healthly', healthlyController);

app.listen(PORT, () => console.log('Listening on port:', PORT));