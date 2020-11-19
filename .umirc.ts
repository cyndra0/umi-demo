import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/',
          exact: true,
          component: 'index',
          menu: {
            name: 'index'
          }
        },
        {
          path: '/login',
          component: 'login',
          menu: {
            name: 'login'
          }
        }
      ]
    }
  ],
});
