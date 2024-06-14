const mongoose = require('mongoose');

const watchItemSchema = mongoose.Schema({
    symbol: String,
    dateCreated : Date
});

const watchItemsModoles = mongoose.model('watchItemsModols', watchItemSchema);

module.exports = watchItemsModoles;