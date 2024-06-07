const express = require("express");
const router = express.Router();
const { placeOrder } = require("../controller/orderController");

router.post("/place-order", placeOrder);

module.exports = router;
