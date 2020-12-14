import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        // 是否登录
        isLogin:false
    },
    mutations:{
        setIsLogin(state,isLogin){
            state.isLogin=isLogin
        }
    },
    actions:{
        SETISLOGIN(content,isLogin){
            content.commit('setIsLogin',isLogin)
        }
    },
    getters:{
        getIsLogin(state){
            return state.isLogin
        }
    }
})