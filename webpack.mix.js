let mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .sass('resources/sass/field.scss', 'css')
    .webpackConfig({
      module: {
            rules: [
              {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules\/(?!(v-calendar)\/).*/
              }
            ]
        }
    });
