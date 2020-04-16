// const db = require('knex')(require('..'))

const knex = require("knex");
// const router = require("express").Router();
// const db = require("../db/db.js");

// configured a connection to the db
const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/produce.db3",
  },
  useNullAsDefault: true,
});