import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex);

// const store=()=>new Vuex.Store({
//    modules:{
//        city,
//        navbar
//    },
//     actions:{
//         //ドキュメント:https://zh.nuxtjs.org/guide/vuex-store/#nuxtserverinit-%E6%96%B9%E6%B3%95
//         // nuxtServerInit ({ commit }, { req }) {
//         //     if (req.session.user) {
//         //         commit('city', req.session.user)
//         //     }
//         // }
//     }
// });
//
// export default store

const modules ={
    city,
    navbar
};
// const actions = {
//     async nuxtServerInit({ commit }, { req, app }) {
//         const { status, data: { province, city } } = await app.$axios.get('/geo/getPosition')
//         commit('geo/setPosition', status === 200 ? { province, city } : { province: '', city: '' })
//         const { status: status2, data: { menu } } = await app.$axios.get('/geo/menu')
//         commit('home/setMenu', status2 === 200 ? menu : [])
//     }
// }

export default {
    modules
}
