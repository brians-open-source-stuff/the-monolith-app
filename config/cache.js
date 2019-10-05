const cache = require("memory-cache");

module.exports = function(duration) {
  return function(req, res, next) {
    const key = `__EXPRESS__${req.originalUrl || req.url}`;
    const cachedBody = cache.get(key);

    if (cachedBody) return res.json(cachedBody);

    res.sendResponse = res.json;
    res.json = function(body) {
      cache.put(key, body, duration * 1000);
      res.json(body);
    };
    next();
  };
};
