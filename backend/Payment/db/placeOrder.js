const Order = require("../model/orderModel");

const placeOrder = async (customerMail, items, amount) => {
  const newOrder = new Order({
    customerMail,
    items,
    amount,
  });

  const placedOrder = await newOrder.save();
  return placedOrder;
};

module.exports = placeOrder;
