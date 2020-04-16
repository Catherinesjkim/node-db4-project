// "up" describes the changes that will be applied to the db
exports.up = function(knex) {
  // create the recipes table 
  return knex.schema.createTable('recipes', tbl => {
    // a primary key, named id, type integer, autoincrement
    tbl.increments();

    // tbl.string
  })
};

// "down" describes how to undo the changes from the up function
exports.down = function(knex) {
  // remove (drop) the recipes table

};
