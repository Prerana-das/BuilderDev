import { read } from 'store/storages/cookieStorage';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainData:{
      items:[]
    },
    selectTag:{
      selectItem:'',
      selectIndex:-1,
    },
    uniqueId:1,
    hoverContent:''
  },
  mutations: {
    setMainData (state,data) {
      state.mainData= data
    },
    setSelectTagData (state,data) {
      state.selectTag= data
    },
    setUniqueIdData (state,data) {
      state.uniqueId= data
    },
    setHoverContent (state,data) {
      state.hoverContent= data
    },
  },
  getters:{
    getMainData (state) {
      return state.mainData
    },
    getSelectTagData (state) {
      return state.selectTag
    },
    getUniqueIdData (state) {
      return state.uniqueId
    },
    getHoverContent (state) {
      return state.hoverContent
    },
  }
});



