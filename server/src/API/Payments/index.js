// Libraries
import express from "express";
import passport from "passport";
import RazorPay from "razorpay";
import { v4 as uuid } from "uuid";
// Database modal
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /list
Des       Get all list menu based on id
Params    _id
Access    Public
Method    GET  
*/
Router.post("/new", async (req, res) => {
  try {
    const instance = new RazorPay({
      key_id: process.env.RZR_PAY_ID,
      key_secret: process.env.RZR_PAY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: `${uuid()}`,
    };
    const order = await instance.orders.create(options);

    return res.json({ order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
