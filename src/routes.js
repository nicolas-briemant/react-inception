import { asyncComponent } from './lib/async-component';

export const createRoutes = (store) => {
  return [
    {
      path: '/',
      name: 'sandBox',
      component: asyncComponent(
        () => import('./components/sand-box').then((module) => module.default)
      ),
    },
    {
      path: '*',
      name: 'notFound',
      component: asyncComponent(
        () => import('./components/not-found').then((module) => module.default)
      ),
    },
  ];
};
