const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target = "web";
const plugins = [
  new MiniCssExtractPlugin(),
  //   new CleanWebpackPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html",
  //   }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";
}
module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
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
  plugins: plugins,
  devServer: {
    // contentBase: "./",
    static: "./dist",
    hot: true,
  },
  target: target,
  devtool: "source-map",
};
