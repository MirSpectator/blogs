import Vue from 'vue'
// 导入vue-router包
import VueRouter from 'vue-router';
// 手动安装VueRouter
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
	routes: [
		//重定向显示首页
		{
			path: '/',
			redirect: '/account'
		},
		{
			path: '/account',
			name: 'account',
			component: resolve => require(['./view/account.vue'], resolve), 
		},
		{
			path: '/questionBank',
			name: 'questionBank',
			component: resolve => require(['./view/questionBank/questionBank.vue'], resolve), 
		}
	],
})

/* 路由守卫 */
router.beforeEach((to,from,next)=>{
	/* console.log(to);
	console.log(from); */
	next()
})
/* 路由解析守卫 */
router.beforeResolve((to,from,next)=>{
	/* console.log(to);
	console.log(from); */
	next();
})

// 把路由对象暴露出去
export default router

