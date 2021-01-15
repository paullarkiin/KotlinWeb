var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/lkn/Desktop/kotlinInTheBrowser/build/js/packages/kotlinInTheBrowser/kotlin/kotlinInTheBrowser.js"]
};

config.output = {
    path: "/Users/lkn/Desktop/kotlinInTheBrowser/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "kotlinInTheBrowser.js"
            : "kotlinInTheBrowser-[name].js";
    },
    library: "kotlinInTheBrowser",
    libraryTarget: "umd",
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "port": 8080,
  "contentBase": [
    "/Users/lkn/Desktop/kotlinInTheBrowser/build/processedResources/Js/main"
  ]
};

// save evaluated config file
var util = require('util');
var fs = require("fs");
var evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
fs.writeFile("/Users/lkn/Desktop/kotlinInTheBrowser/build/reports/webpack/kotlinInTheBrowser/webpack.config.evaluated.js", evaluatedConfig, function (err) {});

module.exports = config
