const Product = require("../product-data/productData");

const getProducts = (req, res) => {
  // Retrieve products from data source
  try {
    console.log("received all data", Product);
    res.status(200).json(Product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
module.exports = { getProducts };
