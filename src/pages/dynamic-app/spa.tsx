import { createRemoteApp } from '@mini-hot/taro'

export default createRemoteApp(() => import('../dynamic-app/routes'))
