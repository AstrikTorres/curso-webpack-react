// necesitamos path para configurar nuestras rutas de archivos
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Este es nuestro archivo de entrada donde va estar todo nuestro código de nuestra app, tener en cuenta que se pueden tener varios entry.
  entry: './src/index.js',
  // El output es donde queremos que nuestro código se genere y este listo para ser usado ya pasando plugins al igual que todos los loaders que necesitemos para nuestro desarrollo.
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname es una variable global que nos permite acceder a la ruta raíz del proyecto
    filename: 'bundle.js'
  },
  mode : 'development',
  // Las extensiones que queremos que webpack reconozca nuestros archivos
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    }
  },
  // Configuración de los loaders, en este caso babel
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  // Configuración de los plugins
  plugins: [
    new HtmlWebpackPlugin({
      // El template es el archivo que queremos que webpack use para generar nuestro index.html
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  // Configuración de devServer
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000
  }
}