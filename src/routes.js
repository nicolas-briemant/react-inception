import { asyncComponent } from './lib/async-component';

export const createRoutes = (store) => {
  return [
    {
      path: '/sandbox',
      name: 'sandbox',
      component: asyncComponent(
        () => import('./components/sandbox').then((module) => module.default)
      ),
    },
    {
      path: '/pulsar',
      name: 'pulsar',
      component: asyncComponent(
        () => import('./components/pulsar').then((module) => module.default)
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
