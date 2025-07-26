const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //cors
const productRoutes = require('./routes/products');

const app = express();

// Please read the Readme file for instructions on how to run and test the server
app.use(cors());
app.use(bodyParser.json());


app.use('/api', productRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});