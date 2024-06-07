const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./src/routes/productRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(cors());

// Mounting product routes
app.use("/api/products", productRoutes);

// Mounting order routes
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
