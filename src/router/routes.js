
const routes = [
  {
    path: '/',
    component: () => import('layouts/Default'),
    children: [
      {path: '', component: () => import('pages/FileHasher')}
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
