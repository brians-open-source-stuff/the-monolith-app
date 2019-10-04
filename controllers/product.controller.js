exports.showOptions = function(req, res) {
  res.status(200);
  res.header("Allow", "OPTIONS");
  res.end();
};
