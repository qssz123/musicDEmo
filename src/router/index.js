// 导入对应的路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import discovery from '@/views/discovery.vue';
import playlists from '@/views/playlists.vue';
import playlist from '@/views/playlist.vue';
import songs from '@/views/songs.vue';
import mvs from '@/views/mvs.vue';
import mv from '@/views/mv.vue';
import home from '@/views/home.vue';
import result from '@/views/result.vue';

/**
 * 重写路由的push方法
 */
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            // 发现音乐
            path: '/',
            redirect:'/home'
        },
        {
            // 发现音乐
            path: '/home',
            component: home
        },
        {
            // 发现音乐
            path: '/discovery',
            component: discovery
        },
        {
            // 推荐歌单
            path: '/playlists',
            component: playlists
        },
        {
            // 推荐歌单
            path: '/playlist',
            component: playlist
        },
        {
            // 最新音乐
            path: '/songs',
            component: songs
        },
        {
            // 最新音乐
            path: '/mvs',
            component: mvs
        },
        // mv详情
        {
            path: '/mv',
            component: mv
        },
        // 搜索结果页
        {
            path: '/result',
            component: result
        }
    ]
});