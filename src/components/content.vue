<template>
  <div>
	  <div class="content_left">
		  <div :class="{'active':item.title===active}"  @click="title_s(item)" v-for="(item,index) in title" :key="index">
			  <img v-if="item.url" :src="item.url"/>
			  <li v-text="item.title"></li>
			  <span></span>
		  </div>
	  </div>
	  <div class="content_right" :is="components"></div>
  </div>
</template>

<script>
	import navTitle from './nav.vue';
	import examination from './examination.vue';
	import historyExamination from './historyExamination.vue';
	import uploadExamination from './uploadExamination.vue';
	export default {
		name: 'bodyContent',
		props: ['title'],
		components: {navTitle,examination,historyExamination,uploadExamination},
		data() {
			return { 
				components:"",
				active:"",
			};
		},
		created() {
			this.active=this.title[0].title;
			this.components=this.title[0].components
		},
		methods: {
	       //写函数方法的地方，函数可以被调用
		   title_s(item){
			   this.active =item.title;
			   this.components=item.components
		   }
		}
	};
</script>

