import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildScssLoader } from './loaders/buildScssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const scssLoader = buildScssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader
  ]
}
