// Reference: https://blog.alexdevero.com/react-express-sqlite-app/
// Modified from: https://github.com/alexdevero/bookshelf-react-express-sqlite-app/blob/master/server/db.js

// Import path module
const path = require("path");

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, "db/database.sqlite");

// Create connection to SQLite database
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

// Create a table in the database called "books"
knex.schema
  // Make sure no "books" table exists
  // before trying to create new
  .hasTable("pantun")
  .then((exists) => {
    if (!exists) {
      // If no "books" table exists
      // create new, with "id", "author", "title",
      // "pubDate" and "rating" columns
      // and use "id" as a primary identification
      // and increment "id" with every new record (book)
      return knex.schema
        .createTable("pantun", (table) => {
          table.increments("id").primary();
          table.string("bayang1");
          table.string("bayang2");
          table.string("maksud1");
          table.string("maksud2");
        })
        .then(() => {
          // Log success message
          console.log("Table 'pantun' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Just for debugging purposes:
// Log all data in "books" table
knex
  .select("*")
  .from("pantun")
  .then((data) => console.log("data:", data))
  .catch((err) => console.log(err));

// Export the database
module.exports = knex;