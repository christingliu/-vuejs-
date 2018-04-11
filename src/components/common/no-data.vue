<template>
	<div class="show-content">
		<img :src="contents.img">
		<div class="cont">{{contents.message}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'no-data',
		data(){
           return{

           }
		},
		props:{
			content:{
				 	type:Object,
			        validator(value){//value就是content的值
			        	if(!value){
                            value={
                            	img:require('assets/images/common/no-data.png'),
                                message:'很抱歉,暂时没有数据！' 
                            }
			        	}else{
			        		if(!/\.png$/.test(value.img)){
			        		Object.assign(value,{
			        			img:require('assets/images/common/no-data.png')
				        		});
				        	}
				        	if(!value.message || /\s/.test(value.message)){
	                           Object.assign(value,{
				        			message:'很抱歉,暂时没有数据！'
				        		});
				        	}
			        	}
			        	
			        	return value;
			        }
			}
		},
		computed:{
			contents(){
				return this.content;
			}
		}
	}
</script>
<style lang="less" scoped="true">
@import '../../assets/less/base.less';
@import '../../assets/less/nodata.less';//这里谁用这个组件 谁引入nodata.less像下面这样传值
.show-content{
	.no-data(880px);//宽度自定义
}
</style>