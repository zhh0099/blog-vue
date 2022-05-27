import { createRouter, createWebHashHistory } from 'vue-router'

const routes=[
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'home', webpackPrefetch: true*/'@/components/layout/VlogHome'),
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: 'about', webpackPrefetch: true*/'@/views/VlogAbout'),
    },
    {
        path: '/classification',
        component: () => import(/* webpackChunkName: 'classification', webpackPrefetch: true*/'@/views/VlogClassification'),
    },
    {
        path: '/record',
        component: () => import(/* webpackChunkName: 'record', webpackPrefetch: true*/'@/views/VlogRecord'),
    },
    {
        path: '/tag',
        component: () => import(/* webpackChunkName: 'tag', webpackPrefetch: true*/'@/views/VlogTag'),
    },
    {
        path: '/link',
        component: () => import(/* webpackChunkName: 'link', webpackPrefetch: true*/'@/views/VlogLink'),
    },
    {
        path: '/article',
        component: () => import(/* webpackChunkName: 'article', webpackPrefetch: true*/'@/views/Article/VlogArticle'),
    },
    {
        path: '/album',
        name: 'album',
        component: () => import(/* webpackChunkName: 'album', webpackPrefetch: true*/'@/views/Album/VlogAlbum'),
    },
    {
        path: '/album/:photoId',
        name:'photo',
        component: () => import(/* webpackChunkName: 'photo', webpackPrefetch: true*/'@/views/Album/VlogPhoto'),
    },

    {
        path: '/talks',
        name:'talks',
        component: () => import(/* webpackChunkName: 'talks', webpackPrefetch: true*/'@/views/Talk/VlogTalk'),
    },
    {
        path: '/talks/:talkId',
        name:'talk',
        component: () => import(/* webpackChunkName: 'talk', webpackPrefetch: true*/'@/views/Talk/TalkInfo'),
    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        // 始终滚动到顶部
        return { 
            top: 0,
            behavior: 'smooth'
         }
      },
})
