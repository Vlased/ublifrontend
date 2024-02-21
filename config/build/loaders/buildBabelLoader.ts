import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import type webpack from 'webpack'

interface BuildBabelLoaderOptions {
  isDev?: boolean
  isTsx?: boolean
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderOptions = {}): webpack.RuleSetRule => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx
          }
        ],
        '@babel/plugin-transform-runtime',
        isTsx && !isDev && [
          babelRemovePropsPlugin,
          {
            props: ['data-testid']
          }
        ]
      ].filter(Boolean)
    }
  }
})
