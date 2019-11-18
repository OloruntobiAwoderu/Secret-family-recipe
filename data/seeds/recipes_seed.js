
 exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      title: "Amala",
      source: "Ibadan",
      ingredients: "cocyam flour, water",
      instructions:
        "Boil water, and then pour the cocoyam flour into the pot. stir well, until it comes out and the txture becomes smooth",
      category: "swallow",
      user_id: 1
    },
    {
      title: "eba",
      source: "Ijebu",
      ingredients: "garri, water",
      instructions:
        "Boil water, and then pour the cocoyam flour into the pot. stir well, until it comes out and the txture becomes smooth",
      category: "swallow",
      user_id: 3
    },
    {
      title: "rice",
      source: "thailand",
      ingredients: "rice, water",
      instructions:
        "Boil water, and then pour the cocoyam flour into the pot. stir well, until it comes out and the txture becomes smooth",
      category: "grain",
      user_id: 2
    }
  ]);
};