const mongoose = require('mongoose');
const uri = process.env.URL_DB
const options = {
    useNewUrlParser: true
  };
 
mongoose.connect(uri, options);

module.exports = mongoose