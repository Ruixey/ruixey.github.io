import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/checklist/creation',
    component: ComponentCreator('/checklist/creation', 'd42'),
    exact: true
  },
  {
    path: '/checklist/release',
    component: ComponentCreator('/checklist/release', '051'),
    exact: true
  },
  {
    path: '/discord',
    component: ComponentCreator('/discord', '96e'),
    exact: true
  },
  {
    path: '/future-plans',
    component: ComponentCreator('/future-plans', '62f'),
    exact: true
  },
  {
    path: '/packages',
    component: ComponentCreator('/packages', '976'),
    exact: true
  },
  {
    path: '/portfolio',
    component: ComponentCreator('/portfolio', '158'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd3e'),
    routes: [
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about', '99a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/packages',
        component: ComponentCreator('/docs/category/packages', '132'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/packages-1',
        component: ComponentCreator('/docs/category/packages-1', '7ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/rtk1',
        component: ComponentCreator('/docs/category/rtk1', '4a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/license',
        component: ComponentCreator('/docs/license', '4cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/package loader/',
        component: ComponentCreator('/docs/package loader/', '4f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/package loader/Cloud Packages',
        component: ComponentCreator('/docs/package loader/Cloud Packages', '6a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/package loader/packages/Cloud Packages',
        component: ComponentCreator('/docs/package loader/packages/Cloud Packages', '14c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/package loader/packages/Package Loader',
        component: ComponentCreator('/docs/package loader/packages/Package Loader', '2c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/RTK1/Addons',
        component: ComponentCreator('/docs/RTK1/Addons', 'dc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/RTK1/Documentation',
        component: ComponentCreator('/docs/RTK1/Documentation', '22b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '508'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
