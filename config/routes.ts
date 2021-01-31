﻿export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/detail',
              },
              {
                name: '欢迎页',
                icon: 'barChart',
                path: '/detail',
                component: './detail',
              },
              {
                name: '事件处理',
                icon: 'audit',
                path: '/list',
                component: './TableList',
              },
              {
                name: '添加党员',
                icon: 'userAdd',
                path: 'basic-form',
                component: './basic-form',
              },
              {
                name: '添加党组织',
                icon: 'usergroupAdd',
                path: 'partyBranch',
                component: './partyBranch',
              },
              {
                name: '添加事件',
                icon: 'form',
                path: 'advanced-form',
                component: './advanced-form',
              },
              // {
              //   name: '党员详情页',
              //   icon: 'solution',
              //   path: '/basic',
              //   component: './basic',
              // },
              {
                name: '党员列表',
                icon: 'solution',
                path: '/memberlist',
                component: './memberList',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
