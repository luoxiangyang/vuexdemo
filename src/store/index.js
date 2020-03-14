import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    list: [],
    detail: null// 表示详情数据
  },
  mutations: {
    uploadAndList (state, payload) {
      state.title = payload.title
      state.list = payload.list
    },
    // 更新详情数据跟标题
    uploadDetail (state, payload) {
      state.title = payload.title
      state.detail = payload.detail
    }
  },
  actions: {
    getList (store, type) {
      // jsonp(url,opt,callback)
      jsonp(`http://api.douban.com/v2/movie/${type}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false
        store.commit('uploadAndList', {
          title: data.title,
          list: data.subjects
        })
      })
    },
    getDetail (store, id) {
      jsonp(`http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false
        store.commit('uploadDetail', {
          title: data.title,
          detail: data
        })
      })
    }
  },
  modules: {
  }
})
