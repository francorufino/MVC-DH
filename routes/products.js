const express = require("express");
const router = express.Router();
const productsModel = require("../models/products");
// const productsModel = require(COMPLETE_O_CAMINHO); TODO
const middleware = require("../middlewares/products");
// GET - /products
router.get("/", function(req, res) {
    const productsData = productsModel.getProducts();

    res.render("products", {
        title: "Pagina de produtos",
        productsData: productsData,
    });
});

// POST - /products

router.post("/", middleware.log, middleware.validateBody, function(req, res) {
    const newProduct = req.body;
    //200 sucesso
    //404 nao encontrado
    //500 - erro interno

    productsModel.insertProduct(newProduct);
    res.redirect("/products");
});

module.exports = router;