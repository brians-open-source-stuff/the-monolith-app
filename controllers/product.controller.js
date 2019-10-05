const { getAllProducts, getProductBySKU } = require("../models/product.model");

exports.showOptions = function(req, res) {
  res.status(204);
  res.header("Allow", "OPTIONS, GET");
  res.end();
};

exports.getAllProducts = async function(req, res, next) {
  try {
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    page = page < 1 ? 1 : page;
    limit = limit < 1 ? 1 : limit;

    const products = await getAllProducts(page, limit);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.getOneProduct = async function(req, res, next) {
  try {
    const product = await getProductBySKU(req.params.sku);
    if (!product) return res.status(404).end();
    res.json(product);
  } catch (error) {
    next(error);
  }
};
