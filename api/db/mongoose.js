const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/recipes-app';

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB sucessfully'))
  .catch((error) => {
    console.log('Error has happened while attempting to connect to MongoDB');
    console.log(error);
  });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };
