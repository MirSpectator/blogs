<template>
	<div>
		<div class="content_right_nav_first">
			<li @click="nav_first(item)" :class="{ active: item.name === sorts_active }" v-for="(item, index) in sorts" v-text="item.name" :key="index"></li>
		</div>
		<div class="content_right_nav_two">
			<div class="radio" v-for="(item, index) in sort" :key="index">
				<div v-text="item.name"></div>
				<input :disabled="!stale" type="checkbox" v-model="radio_sort" :value="item.name" />
			</div>
		</div>
		<div class="content_right_question_type">
			<div class="radio" v-for="(item, index) in question_type" :key="index">
				<div v-text="item"></div>
				<input :disabled="!stale" v-model="radios" :value="item" type="checkbox" />
			</div>
		</div>
		<div class="examination" v-if="!stale">
			<div class="examination_nav">欢迎参加此次考试，请勿刷新页面，以免数据丢失</div>
			<div class="examination_title">
				<span v-text="'总题目数'+questions.length"></span>
				<span>剩余时间20:25</span>
			</div>
			<div class="examination_content">
				<div class="examination_content_topic" v-text="question_sum+'.'+question.topic"></div>
				<div  class="examination_content_image" v-if="question.url">
									   <img :src="question.url" />
				</div>
				<!--  -->
				<div  class="examination_content_radio" v-for="(item,index) in question.first" :key="index">
					<input v-if="question.type==='单选题'||question.type==='判断题'" name="radio" type="radio" />
					<input v-if="question.type==='多选题'" name="radio" type="checkbox" />
					<label v-text="item"></label>
				</div>
			</div>
		</div>
		<div class="button">
		<button v-if="stale" class="submit" @click="submit()">生成试卷</button>
		<button  @click="question_before()" v-if="question_sum>1&&!stale&&question_sum<=questions.length">上一题</button>
		<button v-if="!stale&&question_sum<questions.length" @click="question_next()">下一题</button>
		<button v-if="!stale&&question_sum==questions.length">提交</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'name',
	props: ['props'],
	data() {
		return {
			question_type: ['单选题', '多选题', '判断题'], //题型数组
			radios: [], //绑定复选框获取选中的题型
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
				{ name: 'bootstrap', level: 1, sort_id: 1, parentid: 0 }
			], //二级分类菜单数组
			radio_sort: [], //二级分类菜单多选框选中内容
			sorts_active: '', //一级菜单点击效果
			stale: true,
			questions:[{
	"topic":"请问你的html的水平居中，且已知宽和高",
	"answer":"A",
	"first":["A:你好啊","B:你真的好吗？？","C:我真的好啊","D:真的是这样的吗"],
	"url":"http://formattingclub.com/blogImage/questionDaiMa.png",
	"type":"单选题"
},{
	"topic":"请问你的html的水平居中，且已知宽和高",
	"answer":"BCD",
	"first":["A:你好啊","B:你真的好吗？？","C:我真的好啊","D:真的是这样的吗","E:好像真的就只能是这样了","F:没什么  就这样吧"],
	"url":"",
	"type":"多选题"
},{
	"topic":"请问你的html的水平居中，且已知宽和高，然后使用下方的代码做水平居中正确吗？",
	"answer":"对",
	"first":["正确","错误"],
	"url":"",
	"type":"判断题"
}],
question:{},
question_sum:1
		};
	},
	created() {
		this.sorts_active = this.sorts[0].name;
		this.question=this.questions[0]
	},
	methods: {
		//写函数方法的地方，函数可以被调用
		/* 一级菜单点击效果*/
		nav_first(item) {
			//试卷生成后 无法触发一级菜单点击效果
			if (this.stale) {
				this.sorts_active = item.name;
			}
		},
		/* 生成试卷*/
		submit() {
			console.log(this.radios);
			console.log(this.radio_sort);
			console.log(this.sorts_active);
			this.stale = false;
		},
		question_next(){
			this.question_sum++;
			this.question=this.questions[this.question_sum-1]
		},
		question_before(){
			this.question_sum--;
			this.question=this.questions[this.question_sum-1]
		}
	}
};
</script>
