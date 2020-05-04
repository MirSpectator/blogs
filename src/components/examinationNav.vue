<template>
  <div>
	  <div class="content_right_nav_first">
	  	<li @click="nav_first(item)" :class="{ active: item.name === sorts_active }" v-for="(item, index) in sorts" v-text="item.name" :key="index"></li>
	  </div>
	  <div class="content_right_nav_two">
	  	<div class="radio" v-for="(item, index) in sort" :key="index">
	  		<div v-text="item.name"></div>
	  		<input  type="checkbox" v-model="radio_sort" :value="item.name" />
	  	</div>
	  </div>
	  <div class="content_right_question_type">
	  	<div class="radio" v-for="(item, index) in question_type" :key="index">
	  		<div v-text="item"></div>
	  		<input @click="type(item,radio_sort)" v-model="radios" :value="item" type="radio" />
	  	</div>
	  </div>
	  <slot v-bind:sorts_active="sorts_active" v-bind:radio_sort="radio_sort" v-bind:radios="radios" ></slot>
  </div>
</template>

<script>
	export default {
		name: 'examinationNav',
		props: ['sorts','sort','question_type'],
		data() {
			return {
				radio_sort:[],
				radios:[],
				sorts_active: '', //一级菜单点击效果
			};
		},
		computed: {
			//计算属性不能修改属性值，只能做判断
		},
		created() {
			this.sorts_active=this.sorts[0].name
		},
		methods: {
	       //写函数方法的地方，函数可以被调用
		   /* 一级菜单点击效果*/
		   nav_first(item) {
		   	//试卷生成后 无法触发一级菜单点击效果
		 
		   		this.sorts_active = item.name;
		  
		   },
		   type(item,radio_sort){
			   this.$emit('click',item,radio_sort)
		   }
		}
	};
</script>

