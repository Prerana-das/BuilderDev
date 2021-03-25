// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import _ from 'lodash';

import iView from 'iview'
import locale from 'iview/dist/styles/iview.css';
//import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale

// import vdrag from 'v-drag';
// // const vdrag = require('v-drag');
// Vue.use(vdrag);

Vue.use(iView, {
  locale
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import { mapActions, mapGetters } from 'vuex';
Vue.mixin({
    computed: {
        ...mapGetters({
            uniqueId:'getUniqueIdData',
        })
    },
 methods: {
    i(msg, i = 'Hey!') {
        this.$Notice.info({
            title: i,
            desc: msg
        });
    },
    s(msg, i = 'Great!') {
        this.$Notice.success({
            title: i,
            desc: msg
        });
    },
    w(msg, i = 'Hi!') {
        this.$Notice.warning({
            title: i,
            desc: msg
        });
    },
    e(msg, i = 'Oops!') {
        this.$Notice.error({
            title: i,
            desc: msg,

        });
    },
    swr() {
        this.$Notice.error({
            title: 'Oops',
            desc: 'Something went wrong, please try again later'
        });
    },
    async callApi(method, url, dataObj) {
        try {
            let data = await this.$axios({
                config: {
                  withCredentials: true
                },
                method: method,
                url: url,
                data: dataObj,

            })
            return data

        } catch (e) {

            return e.response
        }
    },


}
})