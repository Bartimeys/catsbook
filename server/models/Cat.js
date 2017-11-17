var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    image: String,
    completed: Boolean,
    note: String
});

module.exports = mongoose.model('Cat', CatSchema);
