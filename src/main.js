import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'animate.css';
import "@/assets/css/global.css"
import "./assets/fonts/iconfont.css"


// 全局后置守卫
// 性能待考虑
// router.afterEach(()=>{
//   if(store.state.drawerFlag)
//     store.commit('DrawerFalse');
// })

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
