import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildScssLoader } from './loaders/buildScssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

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

  const codeBabelLoader = buildBabelLoader({ isDev })
  const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTsx: true })

  const scssLoader = buildScssLoader(isDev)

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    scssLoader
  ]
}
