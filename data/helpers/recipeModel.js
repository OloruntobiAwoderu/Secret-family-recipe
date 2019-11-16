const db = require('../dbConfig.js');


module.exports = {
    get: function getRecipes() {
        return db("recipes");
      },
      
    insert: function(recipes) {
      return db('recipes')
        .insert(recipes)
        .then(([id]) => this.get(id));
    },
    update: function(id, changes) {
      return db('recipes')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
    },
    remove: function(id) {
      return db('recipes')
        .where('id', id)
        .del();
    },
  };