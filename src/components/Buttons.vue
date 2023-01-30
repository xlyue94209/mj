<template>
	<div id="buttons">
		<div class="box">
			<div class="flex">
				<div class="typename"><span>{{ config.s }}</span></div>
				<div class="buttons">
					<button @click="postsondata(2,0,config.p20,1)" class="i-blue">{{ config.p }}</button>
					<button @click="postsondata(4,0,config.ap40,1)" class="i-blue">{{ config.ap }}</button>
					<button @click="postsondata(8,0,config.g80,1)" class="i-blue">{{ config.g }}</button>
					<button @click="postsondata(16,0,config.ag160,1)" class="i-blue">{{ config.ag }}</button>
				</div>
			</div>
			<div class="flex">
				<div class="typename"><span>{{ config.m }}</span></div>
				<div class="buttons">
					<button @click="postsondata(4,0,config.p40,2)" class="i-green">{{ config.p }}</button>
					<button @click="postsondata(8,0,config.ap80,2)" class="i-green">{{ config.ap }}</button>
					<button @click="postsondata(16,0,config.g160,2)" class="i-green">{{ config.g }}</button>
					<button @click="postsondata(32,0,config.ag320,2)" class="i-green">{{ config.ag }}</button>

				</div>
			</div>
			<div class="flex">
				<div class="typename"><span>{{ config.l }}</span></div>
				<div class="buttons">
					<button @click="postsondata(4,1,config.p41,3)" class="i-red">{{ config.p }}</button>
					<button @click="postsondata(8,1,config.ap81,3)" class="i-red">{{ config.ap }}</button>					
					<button @click="postsondata(16,1,config.g161,3)" class="i-red">{{ config.g }}</button>
					<button @click="postsondata(32,1,config.ag321,3)" class="i-red">{{ config.ag }}</button>
				</div>
			</div>

			<div class="flex">
				<div class="typename"><span>对子</span></div>
				<div class="buttons">
					<button @click="postsondata(2,0,config.d20,3)" class="button_d i-red">{{ config.d }}</button>
				</div>
			</div>
		</div>

		<!-- <div class="box_old">
			<div class="flex">
				<div class="typename"><span>{{ config.p }}</span></div>
				<div class="buttons">
					<button @click="postsondata(2,0,config.p20,1)" class="i-blue">{{ config.s }}(2,0)</button>
					<button @click="postsondata(4,0,config.p40,2)" class="i-green">{{ config.m }}(4,0)</button>
					<button @click="postsondata(4,1,config.p41,3)" class="i-red">{{ config.l }}(4,1)</button>
				</div>
			</div>
			<div class="flex">
				<div class="typename"><span>{{ config.ap }}</span></div>
				<div class="buttons">
					<button @click="postsondata(4,0,config.ap40,1)" class="i-blue">{{ config.s }}(4,0)</button>
					<button @click="postsondata(8,0,config.ap80,2)" class="i-green">{{ config.m }}(8,0)</button>
					<button @click="postsondata(8,1,config.ap81,3)" class="i-red">{{ config.l }}(8,1)</button>
				</div>
			</div>
			<div class="flex">
				<div class="typename"><span>{{ config.g }}</span></div>
				<div class="buttons">
					<button @click="postsondata(8,0,config.g80,1)" class="i-blue">{{ config.s }}(8,0)</button>
					<button @click="postsondata(16,0,config.g160,2)" class="i-green">{{ config.m }}(16,0)</button>
					<button @click="postsondata(16,1,config.g161,3)" class="i-red">{{ config.l }}(16,1)</button>
				</div>
			</div>
			<div class="flex">
				<div class="typename"><span>{{ config.ag }}</span></div>
				<div class="buttons">
					<button @click="postsondata(16,0,config.ag160,1)" class="i-blue">{{ config.s }}(16,0)</button>
					<button @click="postsondata(32,0,config.ag320,2)" class="i-green">{{ config.m }}(32,0)</button>
					<button @click="postsondata(32,1,config.ag321,3)" class="i-red">{{ config.l }}(32,1)</button>
				</div>
			</div>

			<div class="flex">
				<div class="typename"><span>{{ config.d }}</span></div>
				<div class="buttons">
					<button @click="postsondata(2,0,config.d20,3)" class="button_d i-red">{{ config.l }}(2,0)</button>
				</div>
			</div>
		</div> -->
	</div>
</template>


<script>
export default {
	// props:['parent_status'],
	props:{
		parent_function:Function,
		parent_status:[String,Number]
	},
	data(){
	    return {
	  		config:{
				// p:'p',
				// ap:'ap',
				// g:'g',
				// ag:'ag',
				// d:'d',
				// s:'s2~8',
				// m:'m19',
				// l:'l34567',
				
				p:'碰',
				ap:'碰(暗)',
				g:'杠',
				ag:'杠(暗)',
				d:'对子',

				s:'2~8',
				m:'19/风',
				l:'东中发白',


				p20:'碰-2~8',
				p40:'碰-19/风',
				p41:'碰-东中发白',

				ap40:'碰(暗)-2~8',
				ap80:'碰(暗)-19/风',
				ap81:'碰(暗)-东中发白',

				g80:'杠-2~8',
				g160:'杠-19/风',
				g161:'杠-东中发白',

				ag160:'杠(暗)-2~8',
				ag320:'杠(暗)-19/风',
				ag321:'杠(暗)-东中发白',

				d20:'对-东中发白',
	  		},

	    }
	},
	//props 接收父数据 如果重名 会以data为准
	methods:{
		postsondata(hs,ts,px,color_no){
			this.$emit('return_data',hs,ts,px,color_no)
		}
	}
}
</script>

<style scoped>/*scoped 只作用于该文件*/
.box{
	margin-top: 2vw;
	padding-top:0.5vw;
    padding-bottom: 0.5vw;
}

.typename{
	width:20%;
    line-height: 40px;
}
.buttons{
	width:88%;
}
button{
	/* min-width: 10vw; */
	cursor: pointer;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: #4e6ef2;
    border-radius: 10px;
    font-size: 14px;
    box-shadow: none;
    /* font-weight: 400; */
    border: 0;
    outline: 0;
    letter-spacing: normal;
}
.button_d{
	float: left;
	margin-left: 1.4vw;
	width:18vw;
}

.i-blue{
	background-color:#57a3f6;
	color:#fff;
	width:18vw;
}
.i-green{
	background-color:#4cd964;
	color:#fff;
	width:18vw;
}
.i-red{
	background-color:#f86863;
	color:#fff;
	width:18vw;
}
</style>