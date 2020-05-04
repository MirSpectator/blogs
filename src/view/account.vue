<template>
	<div>
		<div  class="background"></div>
		<div  class="hove_first"></div>
		<div  class="hove_two"></div>
		<div  class="hove_three"></div>
		<div  class="title">
			 <nav-title class="nav" @click="title" :titles="titles"></nav-title>
		</div>
	</div>
</template>

<script>
	import navTitle from '../components/nav.vue';
export default {
	components: {navTitle},
	data() {
		return {
			titles:["王的个人博客",
			        "磨刀石",
					"个人简历",
				   "开源团队"]
		};
	},
	created() {},
	methods: {
		/* 标题的点击事件 */
         title(item){ 
			 //弹出框的回调函数
			 let success = function (res){
			 	console.log(res);
			 }
			  switch (item){
			  	case "王的个人博客":
			  		break;
				case "磨刀石":
				this.$router.push("/questionBank")
				    break;
				case "个人简历":
				    break;
				case "开源团队":
				    break;	
			  	default:
				  this.$alert("失败","你的消息有误，请重新提交，谢谢合作你的消息有误，请重新提交，谢谢合作你的消息有误，请重新提交，谢谢合作")
			  		break;
			  }
		 }
	}
};
</script>
<style scoped>
	@import "./account.scss";
	
</style>


