<template > 
   <transition name="mode-fade" v-on:leave="closeFlag">
    <div v-show="!!messageData && isShow">
       <div class="pop-mask"></div>
   	   	<div class="pop-message">
				<img :src="content.src">
				<div class="show-message">{{content.con}}</div>
	    </div>
    </div>
    </transition>
</template>
<script type="text/javascript">
	export default{
		name:'pop-message',
		data(){
			return{
				isShow:false
			}
		},
		props:{
			messageData:{
				type:Object,
				validator(value){
				   if(!!value){
				   	  if(value.status==200){
		               	Object.assign(value,{
		               		src:require('assets/images/common/icon_success.png'),
		               		con:value.message
		               	});
		               }else{
			               	 Object.assign(value,{
			               		src:require('assets/images/common/fail.png'),
			               		con:value.message
			               	});
		               }
				   }
	               
	               return value;
				}
			}	
		},
		computed:{
			content(){
				    if(this.messageData){
				    	this.isShow=true;
					    setTimeout(()=>{
					    	this.isShow=false;
					    },2000);
						return this.messageData;
				    }  				
			}
		},
		methods:{
			closeFlag(){
                   this.$emit('callbackOn');
			}
		}
	}
</script>
<style lang="less" scoped="true">
.mode-fade-enter-active,.mode-fade-leave-active{
   transition:opacity 2s;
}
.mode-fade-enter{
	opacity: 0;
}
.mode-fade-leave-active{
	opacity: 0;
}
</style>