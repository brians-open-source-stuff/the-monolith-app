module.exports = function(router) {
  router.options("/products", function(req, res, next) {
    res.status(200);
    res.header("Allow", "OPTIONS");
    res.end();
  });
};
