exports.up = function(knex) {
    return knex.schema.createTable("recipes", function(recipes) {
      recipes.increments();
      recipes
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
   
      recipes.string("title", 255).notNullable();
      recipes.string("source", 255).notNullable();
      recipes.text("ingredients").notNullable();
      recipes.text("instructions").notNullable();
      recipes.string("category", 255).notNullable();
      recipes.binary("image");
    });
  };
   
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipes");
  };
   
  