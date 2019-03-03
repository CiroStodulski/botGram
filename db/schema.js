const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const schmaBotGram = new Schema({
  date: { type: Date, default: Date.now },
  wordMagic: { type: String, required:true },
  chatId: { type: Number, required:true  }
});

module.exports = mongoose.model('botgrams', schmaBotGram);