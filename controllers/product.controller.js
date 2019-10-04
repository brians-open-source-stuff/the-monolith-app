exports.showOptions = function(req, res) {
  res.status(204);
  res.header("Allow", "OPTIONS");
  res.end();
};
