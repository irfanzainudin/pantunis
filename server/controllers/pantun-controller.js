// Reference: https://blog.alexdevero.com/react-express-sqlite-app/
// Modified from: https://github.com/alexdevero/bookshelf-react-express-sqlite-app/blob/master/server/controllers/books-controller.js

// Import database
const knex = require("../db");

// Retrieve all pantun
exports.semuaPantun = async (req, res) => {
  // Get all pantun from database
  knex
    .select("*") // select all records
    .from("pantun") // from 'pantun' table
    .then((userData) => {
      // Send extracted pantun from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving pantun: ${err}` });
    });
};

// Retrieve all pantun
exports.jumlahPantun = async (req, res) => {
  // Get all pantun from database
  knex
    .count("*")
    .from("pantun") // from 'pantun' table
    .then((userData) => {
      // Send extracted pantun from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error counting pantun: ${err}` });
    });
};

// Retrieve specific pantun
exports.cariPantunGunaId = async (req, res) => {
  // Find specific pantun in the database
  knex("pantun")
    .where("id", req.body.id) // find correct record based on id
    .then((response) => {
      // Send the specific extracted pantun from database in response
      res.json(response);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving pantun ${req.body.id}: ${err}`,
      });
    });
};

// Retrieve specific pantun
exports.cariPantunGunaKata = async (req, res) => {
  // Find specific pantun in the database
  knex("pantun")
    .select("*")
    // NOTE: orWhereILike() doesn't work for SQLite since SQLite is case-insensitive by default: https://github.com/sequelize/sequelize/issues/4384#issuecomment-134217570
    // NOTE: need to use req.query for URLs like "?kata=<KATA>": https://stackoverflow.com/questions/20089582/how-to-get-a-url-parameter-in-express
    .whereLike("bayang1", "%" + req.query.kata + "%")
    .orWhereLike("bayang2", "%" + req.query.kata + "%")
    .orWhereLike("maksud1", "%" + req.query.kata + "%")
    .orWhereLike("maksud2", "%" + req.query.kata + "%")
    .then((response) => {
      // Send the specific extracted pantun from database in response
      res.json(response);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving pantun ${req.query.kata}: ${err}`,
      });
    });
};

// Create new pantun
exports.ciptaPantun = async (req, res) => {
  // Add new pantun to database
  knex("pantun")
    .insert({
      // insert new record, a pantun
      bayang1: req.body.bayang1,
      bayang2: req.body.bayang2,
      maksud1: req.body.maksud1,
      maksud2: req.body.maksud2,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Pantun \'${req.body.bayang1}\' created.` });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error creating ${req.body.bayang1} pantun: ${err}`,
      });
    });
};

// Remove specific pantun
exports.buangPantun = async (req, res) => {
  // Find specific pantun in the database and remove it
  knex("pantun")
    .where("id", req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Pantun ${req.body.id} deleted.` });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error deleting pantun ${req.body.id}: ${err}`,
      });
    });
};
