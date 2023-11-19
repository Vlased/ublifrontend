import { BuildPaths } from './../build/types/config';
import webpack, { RuleSetRule, ModuleOptions, DefinePlugin } from "webpack"
import path from 'path';

type RuleType = undefined | null | false | "" | 0 | RuleSetRule | "..."

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '../', '../', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config?.module?.rules?.push(
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          },
        },
        'sass-loader',
      ],
    }
  );

  // eslint-disable-next-line no-param-reassign
  if (config?.module?.rules) {
    config.module.rules = config?.module?.rules?.map((rule: RuleType) => {
      const newRule: RuleSetRule = { ...rule as RuleSetRule }
      if (!newRule) {
        return newRule
      }
      if (/svg/.test(newRule.test as string)) {
        return { ...newRule, exclude: /\.svg$/i };
      }

      return newRule;
    });

    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  }

  config.plugins?.push(new DefinePlugin({
    IS_DEV: JSON.stringify(true),
    API: JSON.stringify(''),
    PROJECT: JSON.stringify('storybook'),
  }))


  return config
}