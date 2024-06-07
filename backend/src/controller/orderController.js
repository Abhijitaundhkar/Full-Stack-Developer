let placeOrderData = [];
const placeOrder = (req, res) => {
  try {
    const { products, firstName, lastName, address } = req.body;
    if (!firstName || !lastName || !address) {
      return res
        .status(400)
        .json({ message: "First name, last name, and address are required." });
    }

    // Logic to place order
    // console.log(`Order placed by: ${name}`);
    // console.log("Product ID:", id);
    // console.log("image:", image);
    // console.log("price:", price);
    // console.log("description:", description);

    //add the place order in array
    placeOrderData.push(req.body);
    console.log("placed order successfully");
    return res.status(201).json({ message: "Order placed successfully!" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
module.exports = { placeOrder };
