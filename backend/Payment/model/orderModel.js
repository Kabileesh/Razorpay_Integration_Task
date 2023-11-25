const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerMail: {
    type: String,
    required: true,
  },
  items: [Object],
  amount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  order_id: String,
  paySlip: [Object],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
