const express = require("express");
const placeOrderController = require("../../Payment/controllers/placeOrderController");
const razorpayPaymentController = require("../../Payment/controllers/razorpayPaymentController");
const verifyRazorSignatureController = require("../../Payment/controllers/verifyRazorSignatureController");

const paymentRouter = express.Router();

paymentRouter.post("/place-order", placeOrderController);
paymentRouter.post("/payment", razorpayPaymentController);
paymentRouter.post(
  "/verify-razorpay-signature",
  verifyRazorSignatureController
);

module.exports = paymentRouter;
