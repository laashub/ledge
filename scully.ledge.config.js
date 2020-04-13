const { Sitemap } = require('@gammastream/scully-plugin-sitemap');
const { registerPlugin } = require('@scullyio/scully');

const defaultPostRenderers = [Sitemap];

const sitemapOptions = {
  urlPrefix: 'https://devops.phodal.com/',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'hourly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/404'],
};

function casePlugin(route, config) {
  return Promise.resolve([
    { route: '/case-study/meituan' },
    { route: '/case-study/ledge' },
    { route: '/case-study/tw-banks' },
    { route: '/case-study/daocloud' },
    { route: '/case-study/cmb' },
    { route: '/case-study/hp' },
    { route: '/case-study/etsy' },
    { route: '/case-study/china-bank' },
    { route: '/case-study/xuecheng' },
    { route: '/case-study/nonghang' },
    { route: '/case-study/huawei' },
    { route: '/case-study/baidu' },
    { route: '/case-study/tencent' },
    { route: '/case-study/bocloud' },
    { route: '/case-study/alibaba' },
    { route: '/case-study/atlassian' },
    { route: '/case-study/zhengcaiyun' },
    { route: '/case-study/dasouche' },
    { route: '/case-study/xiaomi' },
    { route: '/case-study/weibo' },
    { route: '/case-study/youku' },
    { route: '/case-study/bilibili' },
  ]);
}
const validator = async (conf) => [];
registerPlugin('router', 'case', casePlugin, validator);

exports.config = {
  projectRoot: './src',
  projectName: 'ledge',
  outDir: './dist/static',
  sitemapOptions,
  defaultPostRenderers,
  routes: {
    '/case-study/:case': {
      type: 'case',
    },
  },
};
