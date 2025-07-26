const products = require('../utils/data');

// <--------------------------------------------------------------------------------- Important API'S ----------
const getAllProducts = (req, res) => {
  res.json(products); //returns a list of all products stored in the database.
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.productId); //returns details of a specific product by its unique ID.
  if (product) {
    res.json(product); // If product is found, return it
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const addProduct = (req, res) => {
  const newProduct = { // Accept a new product object in the request body and add it to your db.
    id: (products.length + 1).toString(),
    ...req.body 
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// <--------------------------------------------------------------------------------- Optional API'S ----------

const searchProducts = (req, res) => { // Implement a search system to find products based on their name or description. (optional)
  const query = req.query.query.toLowerCase(); 
  const results = products.filter(
    p => p.name.toLowerCase().includes(query) || // check if name includes query
         p.description.toLowerCase().includes(query)
  );
  res.json(results);
};

const getProductsByCategory = (req, res) => { // Filter products by their category. (Optional)
  const category = req.params.categoryName;
  const results = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );
  res.json(results);
};
// <--------------------------------------------------------------------------------- exports  ----------
module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  searchProducts,
  getProductsByCategory
};
//-------------------------------------------------------------------------------------------------------