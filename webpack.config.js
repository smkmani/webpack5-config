let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";
}
module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,
  devServer: {
    // contentBase: "./",
    static: "./",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
};
