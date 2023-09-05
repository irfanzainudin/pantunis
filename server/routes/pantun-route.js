// Reference: https://blog.alexdevero.com/react-express-sqlite-app/

// Import express
const express = require("express");

// Import pantun-controller
const pantunRoutes = require("./../controllers/pantun-controller.js");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all pantun
// In server.js, pantun route is specified as '/pantun'
// this means that '/semua' translates to '/pantun/semua'
router.get("/semua", pantunRoutes.semuaPantun);

router.get("/cariGunaId", pantunRoutes.cariPantunGunaId);

router.get("/cariGunaKata", pantunRoutes.cariPantunGunaKata);

// Add route for POST request to create new pantun
// In server.js, pantun route is specified as '/pantun'
// this means that '/cipta' translates to '/pantun/cipta'
router.post("/cipta", pantunRoutes.ciptaPantun);

// Add route for PUT request to delete specific pantun
// In server.js, pantun route is specified as '/pantun'
// this means that '/buang' translates to '/pantun/buang'
router.put("/buang", pantunRoutes.buangPantun);

// Export router
module.exports = router;
