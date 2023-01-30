<template>
	<div id="Header">
		<div class="header">
			<a @click="back()"><span class="back">{{ parent_hope_hs }}</span></a>
			<span class="title">计算器(<span class="red">{{ parent_win }}</span>)</span>
			<!-- 调用父方法 -->
			<a @click="will_parent_function()" class="reset">重置</a>
		</div>
		<div class="header_c"></div>
		<div class="header_h"></div>
	</div>
</template>


<script>
export default {
	// props:['parent_status'],
	props:{
		parent_reset:Function,
		parent_exchange:Function,
		parent_hope_hs:[String,Number],
		parent_win:[String,Number],
	},
	data(){
	    return {

	    }
	},
	//props 接收父数据 如果重名 会以data为准
	methods:{
		back(){
			alert('还需'+this.parent_hope_hs+'胡')
		},
		postsondata(){
			//自定义事件
			this.$emit('getsondata',this.msg)
		},
		addnum(){
			// this.parent_status++//自己修改  但是会报错

			this.$emit('addnum')//回调父琴的方法
		},
		will_parent_function(){
			this.parent_reset()
		},
		will_parent_exchange(){
			this.parent_exchange()
		}
	}
}
</script>

<style>/*scoped 只作用于该文件*/
.header{
	position: fixed;
	z-index:999;
	height: 10vw;
	background: #fff;
	width: 100vw;

    padding: 2.5vw 0 0;
	margin: -2vw 0 0 -2vw;
}
.header_h{
	height: 10vw;
}
.header_c{
	position: fixed;
	z-index:999;
	height: 3vw;
	background: #f0f0f0;
	width: 100vw;
	margin: 8vw 0 0 -2vw;
}
.title{
	line-height:5vw;
}
.back{
    /*position: relative;*/

	color: #57a3f6;
    float: left;
    font-size: 16px;
    width: 10vw;
    height: 10vw;
}
.reset{
	color: #57a3f6;
    float: right;
    font-size: 16px;
    width: 10vw;
    height: 10vw;
    line-height: 7vw;
    margin-right: 2vw;
    margin-top: -1vw;
}
.red{
	color:red;
}
</style>