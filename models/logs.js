const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    title: { type: String, required: true, maxlength: 20 },
    notes: String,
    loggedWeight: { type: Number, required: true },
    difference: Number,
    owner: String,
    prevWeight: Number
}, { timestamps: true });

const Log = mongoose.model('Log', logSchema);

module.exports = Log;