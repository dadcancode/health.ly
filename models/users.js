const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    avatar: String,
    age: { type: Number, required: true },
    startWeight: { type: Number, required: true },
    goalWeight: { type: Number, required: true },
    currentWeight: Number,
    gender: { type: String },
    logs: [],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;