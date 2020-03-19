const mongoose = require('mongoose');
const { Ingredient } = require('./ingredient.model');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  preparationTime: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: Map,
    of: String,
  },
  steps: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = { Recipe };
