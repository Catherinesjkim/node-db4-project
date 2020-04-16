// Update with your config settings.

module.exports = {

  development: {
  client: "sqlite3", // db driver
  connection: {
    // could be an obj or a string
    filename: "./data/recipe.db3",
  },
  useNullAsDefault: true, // only needed for SQLite
},

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

// sudo npm i -g knex
// knex init
// move the obj from connection.js to the development property
// on knoexfile.js

// update coneection.js to require knexfile and use the development property as the knexConfig

// create a migration with knex migrate:make recipes_table

// change the db name inside knexfile.js

// run the migration with knex migrate:latest