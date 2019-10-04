const { showOptions } = require("../controllers/product.controller");

module.exports = function(router) {
  router.options("/products", showOptions);
};
