const path = require('path');

const SOURCE_DIR = path.join(__dirname, 'src');
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, 'docs');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      SOURCE_COMPONENTS_DIR,
      SOURCE_DOCS_DIR,
      path.join(SOURCE_DIR, 'images'),
      __dirname,
      'node_modules',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.join(SOURCE_DIR, 'images'),
        options: {
          symbolId: filePath => {
            const pathParts = filePath.split(path.sep);
            const symbol = path.basename(filePath, '.svg');

            switch (pathParts[pathParts.length - 2]) {
              case 'math-symbols':
                return `sg-math-symbol-icon-${symbol}`;
              case 'icons':
                return `icon-${symbol}`;
              case 'subjects':
                return `icon-subject-${symbol}`;
              case 'subjects-mono':
                return `icon-subject-mono-${symbol}`;
              case 'mobile-icons':
                return `icon-mobile-${symbol}`;
              default:
                return symbol;
            }
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
