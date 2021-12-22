import { StarOutlined, StarFilled, HeartOutlined } from '@ant-design/icons';

//导入组件
import Demo from '../components/Demo/Demo';
import Funcc from '../components/func/Func';
import Hel from '../components/hel/Hel';
import Login from '../components/Login/Login'


//嵌套路由
export const route = [
    // {
    //     component: Home,
    //     routes: [
    //         {
    //             path: '/',
    //             component: kjsjahjd,
    //             exact: true,
    //         },
    //         {
    //             path: "/child/:id",
    //             component: Child,
    //             routes: [
    //                 {
    //                     path: "/child/:id/grand-child",
    //                     component: GrandChild
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/Demo',
        component: Demo,
    },
    {
        path: '/Hel',
        component: Hel,
    },
    {
        path: '/Func',
        component: Funcc
    }
]

export const menu = [
    {
        key: '1',
        path: '/login',
        icon: <HeartOutlined />,
        name: 'login'
    },
    {
        key: '2',
        path: '/Demo',
        icon: <HeartOutlined />,
        name: 'demo'
    },
    {
        key: '3',
        path: '/Hel',
        icon: <HeartOutlined />,
        name: 'hel'
    },
    {
        key: '4',
        path: '/Func',
        icon: <HeartOutlined />,
        name: 'fuunc'
    },
]