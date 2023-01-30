<template>
	<div id="sw">
		<div class="sw-box">
			<div class="flex">
				<div class="typename"><span>{{ cs_ }}</span></div>
				<div class="sw">
					<span class="ts_hope">{{ parent_ts_hope.cs }}</span>
				    <div class="switch" @click="openSwitch('cs')">
				        <div class="switch-bg" :class="{on:cs==1}">
				            <div class="switch-btn" :class="{on:cs==true}" ></div>
				        </div>
				    </div>
			    </div>
		    </div>
		</div>
<!-- {{ parent_ts_hope }} -->
		<div class="sw-box">
			<div class="flex" v-for="(item,index) in parent_ts_data" :key="index">
				<div class="typename"><span>{{ item.name }}</span></div>
				<div class="sw">
					<span class="ts_hope">{{ parent_ts_hope[item.code] }}</span>
				    <div class="switch" @click="openSwitch(item.code,index)">

				        <div class="switch-bg" :class="{on:item.tf==1}">
				            <div class="switch-btn" :class="{on:item.tf==true}" ></div>
				        </div>
				    </div>
			    </div>
		    </div>
		</div>

  </div>
</template>
<script>
export default {
	name: "switchComponent",
	props:{
		parent_ts_hope:[Object],
		parent_ts_data:[Array],
		// parent_reset:Function,
		parent_reset_son_todo:[Number]
	},
	data(){
		return {
			// cs_:'cs_',
			cs_:'财神',
			cs:true,
		}
	},
	methods: {
		openSwitch:function(w,index){
			index = index>=0?index:-1;

			if(index=='-1'){
				this[w]=!this[w];

				if(this[w]==true){
					var ts=-1;
				}else{
					var ts=1;
				}
				var hs=0;

				this.$emit('return_csts',this[w])
			}else{
				this.parent_ts_data[index].tf=!this.parent_ts_data[index].tf;

				if(this.parent_ts_data[index].tf==true){
					var hs=this.parent_ts_data[index].hs
					var ts=this.parent_ts_data[index].ts
				}else{
					var hs=this.parent_ts_data[index].hs*-1
					var ts=this.parent_ts_data[index].ts*-1
				}
			}

			this.$emit('return_data',hs,ts)
		}
	},
	watch:{
		parent_reset_son_todo:function(n,o){
			this.cs=true;
			for (var i = 0; i < this.parent_ts_data.length; i++) {
				this.parent_ts_data[i].tf=false
			};
		}
	}
}
</script>
<style scoped>
	.sw-box{
		margin-top: 2vw;
		background: #fff;
	}
	.typename{
		width:15%;
	    line-height: 40px;
	}
	.ts_hope{
	    padding-left: 55vw;
		line-height: 24px;
	}
	.sw{
		width:90%;
		padding-top: 2vw;
		padding-right: 3vw;
	}

    .switch{
        width: 12vw;
        height: 5vw;
        border-radius: 50px;
        border: 2px solid #efefef;
        position: relative;

        background: #efefef;
        float: right;
	    line-height: 40px;
       
    }
    .switch-btn{
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        border: 1px solid #efefef;
        position: absolute;
        background-color: #fff;
        top: -1px;
        left: -1px;
        transition:left .5s;
        -moz-transition:left .5s; /* Firefox 4 */
        -webkit-transition:left .5s; /* Safari and Chrome */
        -o-transition:left .5s; /* Opera */
    }
    .switch-bg{
        background-color: #4cd964;/*green*/
        /*blue*/
        /*background-color: #57a3f6;*/
        width: 5vw;
        height: 5vw;
        border-radius: 50px;
        transition: width .5s;
        -moz-transition: width .5s; /* Firefox 4 */
        -webkit-transition:  width .5s; /* Safari and Chrome */
    }
    .switch-btn.on{
        left: 7.5vw;
    }
    .switch-bg.on{
       width: 12vw;
    }
    
</style>
