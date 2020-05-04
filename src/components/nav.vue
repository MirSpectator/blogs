<template>
  <div> 
	  <li @click="title(item)" v-for="(item,index) in titles" :key="index" v-text="item"></li>
  </div>
</template>

<script>
	export default {
		name: 'navTitle',
		props: ['titles'],
		data() {
			return {
				
			};
		},
		methods: {
	       //写函数方法的地方，函数可以被调用
		   title(item){
			  this.$emit('click',item)
		   }
		}
	};
</script>