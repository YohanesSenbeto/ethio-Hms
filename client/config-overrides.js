const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
    exclude: [
      /node_modules\/focus-trap-react/,
      /node_modules\/react-popper/,
      /node_modules\/react-toastify/,
    ],
  })
);
