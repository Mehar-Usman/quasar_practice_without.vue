
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      { path: 'all', component: () => import('pages/all_practice.vue') },
      { path: 'drawer', component: () => import('pages/drawerPage.vue') },
      // { path: '/', component: () => import('pages/coop.vue') },
      // { path: 'index', component: () => import('pages/indexPage2.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
