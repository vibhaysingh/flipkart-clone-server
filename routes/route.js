import express from "express";
import { addItemInCart } from "../controller/cart-controller.js";
import {
  getProductById,
  getProducts,
} from "../controller/product-controller.js";
import { userLogIn, userSignUp } from "../controller/user-controller.js";

const router = express.Router();

//login & signup
router.post("/signup", userSignUp);
router.post("/login", userLogIn);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post("/cart/add", addItemInCart);

// router.post("/payment", addPaymentGateway);
// router.post("/callback", paymentResponse);

export default router;
