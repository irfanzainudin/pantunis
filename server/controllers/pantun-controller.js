// Reference: https://blog.alexdevero.com/react-express-sqlite-app/
// Modified from: https://github.com/alexdevero/bookshelf-react-express-sqlite-app/blob/master/server/controllers/books-controller.js

// Import database
const knex = require("./../db");

// Retrieve all pantun
exports.semuaPantun = async (req, res) => {
  // Get all pantun from database
  knex
    .select("*") // select all records
    .from("pantun") // from 'books' table
    .then((userData) => {
      // Send extracted pantun from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving pantun: ${err}` });
    });
};

// Retrieve specific pantun
exports.cariPantunGunaId = async (req, res) => {
  // Find specific pantun in the database
  knex("pantun")
    .where("id", req.body.id) // find correct record based on id
    .then(() => {
      // Send the specific extracted pantun from database in response
      res.json(userData);
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
    .whereILike("bayang1", "%" + req.body.kata + "%")
    .orWhereILike("bayang2", "%" + req.body.kata + "%")
    .orWhereILike("maksud1", "%" + req.body.kata + "%")
    .orWhereILike("maksud2", "%" + req.body.kata + "%")
    .then(() => {
      // Send the specific extracted pantun from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving pantun ${req.body.id}: ${err}`,
      });
    });
};

// Create new book
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
