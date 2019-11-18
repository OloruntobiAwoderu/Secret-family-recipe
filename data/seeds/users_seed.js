exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      name: "Oloruntobi",
      email: "tobi@gmail.com",
      password: "florence"
    },
    {
      id: 2,
      name: "awoderu",
      email: "tobi1@gmail.com",
      password: "florence"
    },
    {
      id: 3,
      name: "messi",
      email: "tobi2@gmail.com",
      password: "florence"
    },
    {
      id: 4,
      name: "ronaldo",
      password: "florence",
      email: "tobi3@gmail.com"
    },
   
  ]);
};
 

