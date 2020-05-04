<template>
  <div>
	  <h2>这是上传题库</h2>
	  <examination-nav @click="type" ref="examinationNav" v-slot:default="slotProps" :sort="sort" :sorts="sorts" :question_type="question_type">
		  <div class="button">
			   <button @click="title(slotProps)"  class="submit">测试</button>
		  </div>
	  </examination-nav>
	  <div class="question">
		   <div>
			   <div>标题</div>
			   <input /> 
		   </div>
	  </div>
  </div>
</template>

<script>
	import examinationNav from './examinationNav.vue';
	export default {
		name: 'name',
		props: ['props'],
		components: {examinationNav},
		data() {
			return {
				sorts: [
					{ name: '前端开发', level: 1, sort_id: 1, parentid: 0 },
					{ name: '后端开发', level: 1, sort_id: 1, parentid: 0 },
					{ name: '算法基础', level: 1, sort_id: 1, parentid: 0 },
					{ name: '数据库', level: 1, sort_id: 1, parentid: 0 }
				], //一级分类菜单数组
				sort: [
					{ name: 'java', level: 1, sort_id: 1, parentid: 0 },
					{ name: 'js', level: 1, sort_id: 1, parentid: 0 },
					{ name: 'html', level: 1, sort_id: 1, parentid: 0 },
					{ name: 'css', level: 1, sort_id: 1, parentid: 0 },
					{ name: 'vue', level: 1, sort_id: 1, parentid: 0 },
					{ name: 'shiro', level: 1, sort_id: 1, parentid: 0 },
					{ name: 'bootstrap', level: 1, sort_id: 1, parentid: 0 }],
					question_type: ['单选题', '多选题', '判断题'], //题型数组
			};
		},
		
		methods: {
	       //写函数方法的地方，函数可以被调用
		   title(item){
			   this.$refs.examinationNav.stale=false
			   console.log(item);
		   },
		   //点击题型之后会自己更新下边的页面内容，不同题型的页面上传不同的内容 
		   type(item){
			   console.log(item);
		   }
		}
	};
</script>

