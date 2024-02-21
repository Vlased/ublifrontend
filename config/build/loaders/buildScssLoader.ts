import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildScssLoader = (isDev: boolean): webpack.RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => resPath.includes('.module.'),
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
        }
      }
    },
    'sass-loader'
  ]
})
