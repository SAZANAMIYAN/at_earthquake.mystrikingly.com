export const Footer10DataSource = {
  wrapper: { className: 'footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.3 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 9,
        className: 'block',
        title: {
          className: 'logo',
          children: 'logoImg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '3D Urban Earthquake Disaster Visualization Management Platform.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 5,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            { name: 'link1', href: '#', children: 'API文档' },
            { name: 'link2', href: '#', children: '快速入门' },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 5,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 5,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Whu Design' },
            { href: '#', name: 'link1', children: 'Whu Motion' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: 
        '©2023 by <a href="https://www.whu.edu.cn/">Whu Design</a> All Rights Reserved'      
  },
};
