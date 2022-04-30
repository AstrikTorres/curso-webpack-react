// necesitamos path para configurar nuestras rutas de archivos
const path = require('path');

module.exports = {
  // Este es nuestro archivo de entrada donde va estar todo nuestro código de nuestra app, tener en cuenta que se pueden tener varios entry.
  entry: './src/index.js',
  // El output es donde queremos que nuestro código se genere y este listo para ser usado ya pasando plugins al igual que todos los loaders que necesitemos para nuestro desarrollo.
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname es una variable global que nos permite acceder a la ruta raíz del proyecto
    filename: 'bundle.js'
  },
  // Las extensiones que queremos que webpack reconozca nuestros archivos
  resolve: {
    extensions: ['.js', '.jsx']
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
      }
    ]
  },
  // Configuración de devServer
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}