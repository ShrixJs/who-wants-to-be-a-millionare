const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const options = {
  extensions: [`ts`, `tsx`],
  exclude: `/node_modules/`,
}

module.exports = [
  {
    entry: './src/index.tsx',
    mode: 'development',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist/client'),
      filename: 'client_bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/static/index.html',
        inject: 'body',
      }),
      new ESLintPlugin(options),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
    }
  },
];