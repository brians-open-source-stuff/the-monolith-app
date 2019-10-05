const {
  showOptions,
  getAllProducts,
  getOneProduct
} = require("../controllers/product.controller");

module.exports = function(router) {
  router.options("/products", showOptions);
  router.get("/products", getAllProducts);
  router.get("/products/:sku", getOneProduct);
};
