import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    'rc-tour$': path.resolve('src'),
    'rc-tour/es': path.resolve('src'),
  },
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Tour',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
});
