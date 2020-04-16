// "up" describes the changes that will be applied to the db
exports.up = function(knex) {
  // create the recipes table 
  return knex.schema.createTable('recipes', tbl => { 
    // remember to "remember" the call to knex.schema
    // a primary key, named id, type integer, autoincrement
    tbl.increments();

    // string will convert it into a varchar
    tbl
      .string('name', 255)
      .notNullable() // always give me a name
      .unique() // constraint - it has to be unique
      .index(); // will create index

    tbl
    .string('description', 255)
    .notNullable() // always give me a name

    tbl
      .boolean('favorite')
      .defaultTo(false); // 0 in the db - doesn't work well with SQLite
  });
};

// "down" describes how to undo the changes from the up function
exports.down = function(knex) {
  // remove (drop) the recipes table - cmmd + z for the table structure
  return knex.schema.ddropTableIfExists('recipes')
};
