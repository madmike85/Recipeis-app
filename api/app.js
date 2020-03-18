const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const { mongoose } = require('./db/mongoose');
const { Recipe } = require('./db/models/recipe.model');
const { ingredient } = require('./db/models/ingredient.model');

app.use(bodyParser.json());
app.use(cors());

// Recipes API

// Get all recies from database

app.get('/recipes', (req, res) => {
  Recipe.find({})
    .then((recipes) => {
      res.send(recipes);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Get the recipe from database

app.get('/recipes/:id', (req, res) => {
  Recipe.findOne({ _id: req.params.id })
    .then((recipe) => res.send(recipe))
    .catch(() => {
      res.send({ message: 'could not find the recipe' });
    });
});

// Add a recipe to database

app.post('/recipes', (req, res) => {
  const newRecipe = new Recipe({
    title: req.body.title,
    preparationTime: req.body.preparationTime,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    description: req.body.description,
  });

  newRecipe
    .save()
    .then((recipe) => res.send(recipe))
    .catch((error) => res.send(error));
});

// Update recipe in database

app.patch('/recipes/:id', (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then((recipe) => {
    res.send(recipe);
  });
});

// Delete recipe from database

app.delete('/recipes/:id', (req, res) => {
  Recipe.findOneAndRemove({
    _id: req.params.id,
  }).then((deletedRecipe) => res.send(deletedRecipe));
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
