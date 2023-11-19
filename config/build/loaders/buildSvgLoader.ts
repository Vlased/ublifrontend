import type webpack from 'webpack'

export const buildSvgLoader = (): webpack.RuleSetRule => ({
  test: /\.svg$/,
  use: [{
    loader: '@svgr/webpack',
    options: {
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false
              }
            }
          }
        ]
      }
    }
  }]
})
