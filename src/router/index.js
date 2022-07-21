//引入组件和路由
import storeManage from '../pages/storeManage'
import userManage from '../pages/userManage'
import subscribeManage from '../pages/subscribeManage'
import vueRouter from 'vue-router'

export default new vueRouter({
    routes: [//配置我们一组组的key-value关系
        {
            path: '/storeManage',//切换的路径
            component: storeManage//对应的组件
        },
        {
            path: '/userManage',
            component: userManage
        },
        {
            path: '/subscribeManage',
            component: subscribeManage
        }
    ]
})