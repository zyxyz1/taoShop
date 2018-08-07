// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import api from './utils/api'
import signCkeck from './utils/sign.js'
import './assets/css/myVant.less';//全局修改vant样式
var qs = require('qs')
// import sign from './utils/sign'
import { Button,Tabbar, TabbarItem,Swipe, SwipeItem,
  Dialog,Field, Checkbox, CheckboxGroup,Cell,CellGroup,
  PasswordInput, NumberKeyboard,DatetimePicker} from 'vant'
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Swipe)
.use(SwipeItem).use(Dialog).use(Field).use(Checkbox)
.use(CheckboxGroup).use(Cell).use(CellGroup)
.use(PasswordInput).use(NumberKeyboard).use(DatetimePicker);


// Vue.use(axios)
Vue.prototype.$http = api
Vue.prototype.$qs = qs
Vue.prototype.$sign = signCkeck

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
