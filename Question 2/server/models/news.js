let mongoose = require('mongoose');

 // create a model class
 let newsModel = mongoose.Schema({
     id: String,
     name: String,
     description: String,
     url: String,
     category: String,
     language: String,
     country: String
 },
 {
     collection: 'news'
 }
 );

module.exports = mongoose.model('News', newsModel);