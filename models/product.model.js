const db = require("../config/sql");

exports.getAllProducts = async function(page = 1, limit = 10) {
  try {
    const offset = (page - 1) * limit;
    const productsql = `SELECT sku, name FROM products LIMIT :offset, :limit`;
    const metasql = `SELECT CEIL(COUNT(id) / :limit) AS totalPages, COUNT(id) AS totalItems FROM products`;
    const [products] = await db.query(productsql, { offset, limit });
    const [meta] = await db.query(metasql, { limit });
    return {
      currentPage: page,
      totalPages: parseInt(meta[0].totalPages),
      totalItems: parseInt(meta[0].totalItems),
      nextPage:
        page < parseInt(meta[0].totalPages)
          ? `/products?page=${page + 1}&limit=${limit}`
          : null,
      prevPage: page > 1 ? `/products?page=${page - 1}&limit=${limit}` : null,
      items: products
    };
  } catch (error) {
    console.error(error.stack);
    return null;
  }
};

exports.getProductBySKU = async function(sku) {
  try {
    const sql = `SELECT sku, name FROM products WHERE sku = :sku`;
    const [product] = await db.query(sql, { sku });
    return product[0];
  } catch (error) {
    console.error(error.stack);
    return null;
  }
};
