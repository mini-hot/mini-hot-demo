import { createRemoteAppRoutes } from '@mini-hot/taro'

export default createRemoteAppRoutes([
    {
        path: '/PageA/:code',
        // PageA 不继续分块
        getPage: async () => require('./PageA'),
    },
    {
        path: '/PageB',
        // PageB 继续分块
        getPage: () => import('./PageB'),
    },
])
