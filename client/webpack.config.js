config = {
  entry: __dirname + "/src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  }, // UPDATED
  devtool: "source-map"
};

module.exports = config;
