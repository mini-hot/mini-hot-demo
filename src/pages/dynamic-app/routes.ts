import { createRemoteAppRoutes } from '@mini-hot/taro'
import PageA from './PageA'

export default createRemoteAppRoutes([
    {
        path: '/PageA/:code',
        getPage: () => (Promise.resolve({ default: PageA })),
    },
    {
        path: '/PageB',
        getPage: () => import('./PageB'),
    },
    {
        path: '/PageC',
        getPage: () => import('./PageC'),
    },
])
