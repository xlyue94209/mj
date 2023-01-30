<template>
	<div id="mj">
    <Header :parent_reset="reset" :parent_hope_hs="hope_hs" :parent_win="win"/>

		<div class="box">
			<div id="cards" v-dompurify-html="cards">-</div>
			<div id="win" class="red">({{ jbhs }}+10)*2^{{ jbts+tsts }}={{ win }}</div>
			<div id="lose" class="green">{{ jbhs }}*2^{{ jbts }}=<span :class="{'red':config.boom_color}">{{ lose }}</span></div>
			<div id="detail">
				<div class="flex">
					<span class="flex-space-around">基本{{ config.hs }}</span>
					<span class="flex-space-around">特殊{{ config.hs }}</span>
					<span class="flex-space-around">基本{{ config.ts }}</span>
					<span class="flex-space-around">特殊{{ config.ts }}</span>
				</div>
				<div class="flex">
					<span class="flex-space-around">{{ jbhs }}</span>
					<span class="flex-space-around">{{ tshs }}</span>
					<span class="flex-space-around">{{ jbts }}</span>
					<span class="flex-space-around">{{ tsts }}</span>
				</div>
			</div>
		</div>
    <Buttons v-show=button_type :parent_exchange="exchange" @return_data="son_return_data_buttons"/>
    <!-- <Buttons_old v-show=button_type_old :parent_exchange="exchange" @return_data="son_return_data_buttons"/> -->
    <Sw @return_data="son_return_data_sw" :parent_ts_hope="ts_hope" @return_csts="son_return_csts"  :parent_reset_son_todo="reset_son_todo" :parent_ts_data="ts_data"/>
	</div>
</template>


<script>
import Buttons from '@/components/Buttons'
// import Buttons_old from './Buttons_old'
import Sw from './Sw'
import Header from './Header'
import request from '@/api/request'
// import axios from 'axios';

export default {
	name: 'Mj',
	data(){
	  	return{
			button_type:true,
			// button_type_old:false,

	  		cards:'-',
	  		win:10,
	  		lose:0,
	  		// n:'º',
	  		hope_hs:90,

  			jbhs:0,
  			tshs:10,
  			jbts:0,
  			tsts:0,

  			dh:10,
  			csts:0,
  			reset_son_todo:0,

  			//当前jb下的hs
  			ts_hope:{
  				cs:10,

  				qdh:12,
  				zm:12,
  				ddh:14,
  				hys:20,
  				qys:80
  			},
			ts_data:[
				{name:'嵌档胡',code:'qdh',tf:false,hs:2,ts:0},
				{name:'自摸',code:'zm',tf:false,hs:2,ts:0},
				{name:'对对胡',code:'ddh',tf:false,hs:4,ts:0},
				{name:'混一色',code:'hys',tf:false,hs:0,ts:1},
				{name:'清一色',code:'qys',tf:false,hs:0,ts:3},
			],

	  		config:{
		  		hs:'胡数',
		  		ts:'台数',

		  		boom_color:false,

		  		// boom:'100',
		  		boom:'辣子',
	  		}
	  	}
	},
	components: {
		Header,
		Buttons,
		// Buttons_old,
		Sw,
	},
	methods:{
		js(){
			if(this.jbts>5){
				alert('不至于不至于,大哥不至于');
				return;
			}
			var zhs=parseInt(this.jbhs)+parseInt(this.tshs);
			var zts=parseInt(this.jbts)+parseInt(this.tsts);

			//win
			var win_bs=this.bs_zh(zts)
			this.win=this.js_math(zhs,win_bs)

			//lose
			var lose_bs=this.bs_zh(this.jbts)
			this.lose=this.js_math(this.jbhs,lose_bs);

			if(this.lose==this.config.boom){
				this.config.boom_color=true;
			}else{
				this.config.boom_color=false;
			}

			this.js_hope()
			this.js_ts_hope()
		},
		js_math(a,b){
			var data=a*b;
			if(data>=100){
				data=this.config.boom
			}

			return data;
		},
		bs_zh(ts){
			var bs=0
			ts=ts||0;
		  		 // º ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁿ
			if(ts==0){
				// this.n='º';
				bs=1
			}else if(ts==1){
				// this.n='¹';
				bs=2
			}else if(ts==2){
				// this.n='²';
				bs=4
			}else if(ts==3){
				// this.n='³';
				bs=8
			}else if(ts==4){
				// this.n='⁴';
				bs=16
			}else{
				// this.n='⁵';
				bs=32
			}

			return bs;
		},
		js_hope(){
			var zhs=parseInt(this.jbhs)+parseInt(this.tshs);
			var zts=parseInt(this.jbts)+parseInt(this.tsts);
			var need_hs=100;

			if(zts>=4)return;
			else if(zts==3)need_hs=14
			else if(zts==2)need_hs=26
			else if(zts==1)need_hs=50

			if((need_hs-zhs)<=0)this.hope_hs=this.config.boom
			else this.hope_hs=need_hs-zhs
		},
		js_ts_hope(){
			var zhs_cs=this.jbhs+this.dh;
			if(this.csts==1){
				var zts_cs=this.jbts+2;
			}else{
				var zts_cs=this.jbts+1;
			}
			this.ts_hope.cs=this.js_math(zhs_cs,zts_cs);
			
			for (var i = 0; i < this.ts_data.length; i++) {
				var zhs=this.jbhs+this.dh+this.ts_data[i].hs;
				var zts=this.jbts+this.csts+this.ts_data[i].ts;
				this.ts_hope[this.ts_data[i].code]=this.js_math(zhs,this.bs_zh(zts));
			};
		},
		reset(){
			this.cards='-'
	  		this.win=10
	  		this.lose=0
	  		this.hope_hs=90
	  		
  			this.jbhs=0
  			this.tshs=10
  			this.jbts=0
  			this.tsts=0

			this.ts_hope.cs=10

			this.ts_hope.qdh=12
			this.ts_hope.zm=12
			this.ts_hope.ddh=14
			this.ts_hope.hys=20
			this.ts_hope.qys=80

  			this.reset_son_todo++
		},
		exchange(){
			this.button_type=!this.button_type
			this.button_type_old=!this.button_type_old
		},
		//子
		son_return_data_buttons(hs,ts,px,color_no){
			this.jbhs+=hs
			this.jbts+=ts

			if(this.jbts>5){
				alert('不至于不至于,大哥不至于');
				return;
			}

			if(color_no=='1'){
				var color='#57a3f6';
			}else if(color_no=='2'){
				var color='#4cd964';
			}else if(color_no=='3'){
				var color='#f86863';
			}
			px='<span style="color:'+color+'">'+px+'</span>';

			if(this.cards=='-'){
				this.cards=px
			}else{
				this.cards+='||'+px
			}

			this.js()
		},
		son_return_data_sw(hs,ts){
			this.tshs+=hs
			this.tsts+=ts

			this.js()
		},
		son_return_csts(n){
			if(n===true){
				this.csts=0;
			}else{
				this.csts=1;
			}
		}
	}
}
</script>

<style>/*scoped 只作用于该文件*/
body{
	font-size: 14px;
	background: #f0f0f0;
	
	overflow-y: hidden;
}
.box{
	/*margin-top: 2vw;*/
	background: #fff;
	/*padding-top:2vw;*/
    padding-bottom: 2vw;
}
.box div{
	margin: 1vw auto;
}
.flex{
	display: flex;
}
.flex-space-around{
	flex:1;
	justify-content:space-around
}
#cards{
	font-size: 16px;
}
#win{
	font-size: 16px;
}
#lose{
	font-size: 16px;
}
.red{
	color:red;
}
.green{
	color:green;
}
</style>