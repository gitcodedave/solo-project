const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    //output will create folder if it doesn't exist
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
          publicPath: '/build'
        },
        compress: true,
        port: 8080,
        proxy: {
          '/api': 'http://localhost:3000'
        }
      },
      plugins: [new HtmlWebpackPlugin({
        title: 'development',
        template: path.resolve(__dirname, 'src/index.html')
      })],
      //webpacks default is production
      mode: process.env.NODE_ENV,
      module: {
        rules: [
        {
          test: /\.(?:js|mjs|cjs|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }],
                ['@babel/preset-react', { targets: "defaults" }]
              ]
            }
          }
        },
        {
            test: /\.s[ac]ss$/i,
            // exclude: /node_modules/,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }
      ]
    }
}