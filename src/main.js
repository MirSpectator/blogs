import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import "babel-polyfill"
import $alert from "./utils/js/alert.js"
import http from "./utils/js/http"

//导入自定义的路由模块
import router from './router.js'

Vue.prototype.$alert = $alert

Vue.use(http)
//修改vue的写法
//创建vue实例并且将其挂载到app节点上
const vm = new  Vue({
	el: '#app',
	render: h => h(App),
	//将路由对象挂载到vm上
	router
})