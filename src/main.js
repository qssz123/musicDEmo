import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
// 导入Element-ui
import element from '@/utils/element'
Vue.use(element)

// 导入全局初始化样式
import '@/style/base.scss';

// 路由整合

import moment from 'moment';
// 全局过滤器
Vue.filter('formatDuration',(dt)=>{
  // 转分
  let min = Math.ceil(dt / 1000 / 60);
  min = min < 10 ? '0' + min : min;
  // 秒
  let sec = Math.ceil((dt / 1000) % 60);
  sec = sec < 10 ? '0' + sec : sec;
  return min + ':' + sec;
})
Vue.filter('formatTime', (time)=>{
  return moment(time).format('YYYY-MM-DD hh:mm:ss');
})
Vue.filter('formatCount',(count)=>{
  if (count / 10000 > 10) {
    return parseInt(count / 10000) + '万';
  } else {
    return count;
  }
})
router.beforeEach((to, from, next) => {
  if(to.fullPath!=='/home'){
    //判断是否登录
    if (store.state.isLogin) {
      next()
    }
    else {
      alert('请登录后操作')
      next({
        path: '/home'
      })
    }
  }else{
    next()
  }

})



Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  // 挂载到Vue示例上
  router,
  store
}).$mount('#app');
