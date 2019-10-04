module.exports = async function(app) {
  try {
    const server = await app.listen(process.env.PORT);
    console.log("App is running on port", server.address().port);
  } catch (error) {
    console.error(error.stack);
    process.exit(1);
  }
};
