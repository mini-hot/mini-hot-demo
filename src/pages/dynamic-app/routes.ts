import { createRemoteAppRoutes } from '@mini-hot/taro'

export default createRemoteAppRoutes([
    {
        path: '/PageA/:code',
        getPage: () => import('./PageA'),
    },
    {
        path: '/PageB',
        getPage: () => import('./PageB'),
    },
])
