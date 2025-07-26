const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  searchProducts,
  getProductsByCategory
} = require('../controllers/products');

//--------------------- Important API'S ----------
router.get('/get-products', getAllProducts); // Retrieve a list of all products stored in the database.
router.get('/get-product/:productId', getProductById); // Return details of a specific product by its unique ID.
router.post('/add-product', addProduct); // Accept a new product object in the request body and add it to your db.

//--------------------- Optional API'S ----------

router.get('/search-products', searchProducts); // Implement a search system to find products based on their name or description.
router.get('/get-products-by-category/:categoryName', getProductsByCategory); // Filter products by their category.

//--------------------- Exports ----------
module.exports = router;