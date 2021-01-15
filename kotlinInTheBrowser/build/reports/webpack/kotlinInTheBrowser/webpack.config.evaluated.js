{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/lkn/Desktop/kotlinInTheBrowser/build/js/packages/kotlinInTheBrowser/kotlin/kotlinInTheBrowser.js'
    ]
  },
  output: {
    path: '/Users/lkn/Desktop/kotlinInTheBrowser/build/distributions',
    filename: [Function: filename],
    library: 'kotlinInTheBrowser',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      '/Users/lkn/Desktop/kotlinInTheBrowser/build/processedResources/Js/main'
    ]
  }
}