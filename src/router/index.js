//引入组件和路由
import storeManage from '../pages/storeManage'
import userManage from '../pages/userManage'
import subscribeManage from '../pages/subscribeManage'
import pwdManage from '../pages/pwdManage'
import VueRouter from 'vue-router'

export default new VueRouter({
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
        },
        {
            path: '/pwdManage',
            component: pwdManage
        }
    ]
})

// const routes = [
//     {
//         path: '/',
//         name: 'Main',
//         component: () => import('../pages/Main.vue'),
//         children: [
//             {
// 				path:'/bookFetch',
// 				name:'bookFetch',
// 				component:() => import('../pages/bookFetch')
// 			},
//             {
//                 path:'/userManage',
//                 name:'userManage',
//                 component: userManage
//             },
//             {
//                 path:'/subscribeManage',
//                 name:'subscribeManage',
//                 component: subscribeManage
//             },
//             {
//                 path:'/storeManage',
//                 name:'storeManage',
//                 component: storeManage
//             }
//         ]
//     },
//     {
//         path: '/login',
//         name: 'login',
//         component: () => import('../pages/login/index.vue')
//     }
// ]

// const router = new VueRouter({
//     mode: 'history',
//     routes
// })

// export default router