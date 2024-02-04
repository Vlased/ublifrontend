import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import type webpack from 'webpack'

interface BuildBabelLoaderOptions {
  isTsx?: boolean
}

export const buildBabelLoader = ({ isTsx }: BuildBabelLoaderOptions = {}): webpack.RuleSetRule => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx
          }
        ],
        '@babel/plugin-transform-runtime',
        isTsx && [
          babelRemovePropsPlugin,
          {
            props: ['data-testid']
          }
        ]
      ].filter(Boolean)
    }
  }
})
