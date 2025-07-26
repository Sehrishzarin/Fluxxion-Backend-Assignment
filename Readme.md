# Task: Build Express API for Sample Product Data

**Objective:**
Develop a basic Express.js API that handles sample product data, supports retrieving, searching, and adding products.

``I've tried my best to make the code as clean as possible and commented out the details, Please read the Description on how to test these API's so you don't have to waste your time ``

**Requirements** <br>
1. Setup ☑️
<br>🔹Initialize a Node.js project.
<br>🔹Install necessary dependencies like Express and others for handling requests and CORS.
<br>🔹Structure the project using folders like routes, controllers, and optionally utils.

**2. Endpoints to Implement** <br>
`GET /get-products` ☑️
Retrieve a list of all products stored in the database.

`GET /get-product/:productId` ☑️
Return details of a specific product by its unique ID.

`POST /add-product` ☑️
Accept a new product object in the request body and add it to your db

**External Product Data** <br> ☑️
<br>🔹Generate or collect a few sample products using platforms like Daraz, Amazon.
<br>🔹Format the collected data into consistent product entries.
<br>🔹Use the /add-product endpoint to insert this data into your database or storage.

**Additional Features (Optional but Recommended)** 

`GET /search-products?query=...` ☑️
Implement a search system to find products based on their name or description.

`GET /get-products-by-category/:categoryName` ☑️
Filter products by their category.

# Test Api's

**Run:** 
To install packages: 
 `npm install` 
To run on nodemon : 
`npm run dev`

**Test:**

<h2>Important API's </h2>
🔹 Get All Products

Method : `GET`

API : `http://localhost:3000/api/get-products`

🔹 Get Product by id
Method : `GET`
API : `http://localhost:3000/api/get-product/1`

🔹 Add New Product
Method : ``POST``
API: `http://localhost:3000/api/add-product`
Content-Type: `application/json`

JSON : 
----------------------------------------------------
{
  "name": "Google Pixel 6",
  "description": "Google Pixel 6 with Tensor chip",
  "price": 599,
  "category": "Smartphones",
  "brand": "Google"
}
-----------------------------------------------------
<h2>Extra API's</h2>

🔹 Search products:

Method : `GET`

Api: `http://localhost:3000/api/search-products?query=Fan`

🔹 Get products by category

Method: `GET`
API: `http://localhost:3000/api/get-products-by-category/cooling`