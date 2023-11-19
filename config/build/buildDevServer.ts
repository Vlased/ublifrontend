import { type BuildOptions } from './types/config'
import { type Configuration } from 'webpack-dev-server'

export const buildDevServer = ({ port }: BuildOptions): Configuration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
