const express = require("express");
const productsRepo = require("../repositories/products");
const productTemplate = require("../views/product/index");
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(productTemplate({ products }));
});
module.exports = router;
