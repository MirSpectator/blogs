<template>
	<div>
		 <nav-title class="nav" @click="title" :titles="titles"></nav-title>
	     <body-content :title="content_title" class="content"></body-content>
	</div> 
</template>

<script>
	import navTitle from '../../components/nav.vue';
	import bodyContent from '../../components/content.vue';
	export default {
		components: {navTitle,bodyContent},
		data() {
			return {
				titles:["王的个人博客",
				        "磨刀石",
						"个人简历",
					   "开源团队",
					   "登录","注册"],
				content_title:[{"title":"小试牛刀","url":"https://formattingclub.com/blogImage/examination.png","components":"examination"},
					{"title":"历史试卷","url":"https://formattingclub.com/blogImage/historyExamination.png","components":"historyExamination"},
					{"title":"上传题库","url":"https://formattingclub.com/blogImage/uploadExamination.png","components":"uploadExamination"}],	
			};
		},
		created() {},
		methods: {
			/* 标题的点击事件 */
			title(item){
				console.log(item);
			}
		}	
	}
</script>

<style scoped>
	@import "questionBank.scss";
</style>
