import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex);

const store=()=>new Vuex.Store({
   modules:{
       city,
       navbar
   },
    actions:{
        //ドキュメント:https://zh.nuxtjs.org/guide/vuex-store/#nuxtserverinit-%E6%96%B9%E6%B3%95
        // nuxtServerInit ({ commit }, { req }) {
        //     if (req.session.user) {
        //         commit('city', req.session.user)
        //     }
        // }
    }
});



export default store