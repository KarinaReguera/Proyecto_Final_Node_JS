//router

import { Router } from "express";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import { validateProduct } from "../middlewares/productValidator.js";

const router = Router();

router.get("/", getProducts);

router.post("/", validateProduct, createProduct);

router.put("/:id", validateProduct, updateProduct);

router.delete("/:id", deleteProduct);

export default router;