/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: xxx@xxx.com
 * @LastEditTime: 2022-09-12 21:10:56
 * @Description:
 */

import sidebarData from './sidebar/data';
import sidebarAlgorithm from './sidebar/algorithm';
import sidebarDesignPattern from './sidebar/design-pattern';

module.exports = {
  title: 'vivace',
  description: 'frontend docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Vivace',
    logo: '/logo.png',
    laslltUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xiumubai',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiumubai',
    },
    nav: [
      {
        text: '数据结构',
        link: '/data-structure/',
        activeMatch: '/data-structure/',
      },
      {
        text: '算法',
        link: '/algorithm/',
        activeMatch: '/algorithm/'
      },
      {
        text: '设计模式',
        link: '/design-pattern/',
        activeMatch: '/design-pattern/'
      }
    ],
    sidebar: {
      '/data-structure/': sidebarData(),
      '/algorithm/': sidebarAlgorithm(),
      '/design-pattern/': sidebarDesignPattern(),
    },
  },
};
