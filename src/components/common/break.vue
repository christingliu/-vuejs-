<template>
	<div class="page-nav">
		    <span class="home"></span>
		    <ul>
		    	<li v-for="(title,index) in titles" v-if="(index+1)==titles.length">
		    		<span class="active">{{title.name}}</span>
		    	</li>
		    	<li v-else>
		    		<span>{{title.name}}</span>>>
		    	</li>
		    </ul>
		</div>
</template>
<script type="text/javascript">
	export default {
		name:'break',
		data(){
			return{
                   
			}
		},
		props:{
			titles:{
				type:Array,
				required:true
			}
		}
	}
</script>
<style lang="less" scoped>
	.page-nav{
		    overflow: hidden;
            margin: 26px 0 0 30px;
        .home{
        	     width: 16px;
			    height: 16px;
			    float: left;
			    margin-top: 3px;
			    background: url('../../assets/images/common/icon-home.png') no-repeat;
        }
        ul{
        	    float: left;
			    overflow: hidden;
			    margin-left: 5px;
			li{
				color: #617083;
			    font-size: 15px;
			    margin-left: 5px;
			    display: inline-block;
			}
			span{
				font-size:16px;
			}
			.active{
				color:#2095f2;
			}
        }
	}
</style>