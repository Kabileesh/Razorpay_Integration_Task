const mongoose = require("mongoose");
const Order = require("../model/orderModel");
const CustomError = require("../../Utils/customError");
const { ERROR_UNKNOWN } = require("../../Utils/constants");

const updateOrderId = async (orderDetails) => {
  await Order.findOneAndUpdate(
    { _id: orderDetails.receipt },
    { $set: { order_id: orderDetails.id } },
    { new: true }
  ).catch((err) => {
    throw new CustomError(ERROR_UNKNOWN.message, ERROR_UNKNOWN.status);
  });
};

module.exports = updateOrderId;
