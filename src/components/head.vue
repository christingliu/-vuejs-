<template>
	<div class="top">
        <div class="topCon">
        	<div class="logo">
        		<img :src="imgDatas.img1">
        	</div>
        	<div class="topR">
        	   <div class="list">
        	       <p class="name" @click="showList()">
        	         <span>{{tempName}}+{{loginerName}}</span>
        	         <img class="show_down" :src="imgDatas.img2">
        	       </p>
        	   	   <ul class="chooseList" v-show="isShowlist" v-on:mouseleave="isShowlist=false">
        	   	   	  <li class="userList" v-for="item in items">
        	   	   	   <span :data-id="item.userId" @click="setUId(item.userId);showList()">{{item.organizeName}}+{{loginerName}}</span>
        	   	   	  </li>
        	   	   </ul>
        	   </div>
        	   <img  class="iconHg" :src="imgDatas.img3" ref="headIcon">
        	   <a href="javascript:void(0);" class="exit" @click="exit()">退出</a>
        	</div>
        </div>
           <head-data v-on:onGetPer="getHeadPer" :title='userId'></head-data>
	</div>
</template>
<script type="text/javascript">
import imgPreload from 'assets/js/common/imgPreload';
import CONFIG from 'assets/js/common/config';
/*******************组件*********************/
import headJson from 'components/head-data.vue';
	export default{
		name:'header',
		data(){
			return{
                 header:require('assets/js/common/header-data.js'),
                 imgDatas:{
                 	img1:require('assets/images/common/logo.png'),
                 	img2:require('assets/images/common/fa-angle-down.png'),
                 	img3:require('assets/images/common/user.png')
                 },
                 isShowlist:false,                
                 loginerName:'',
                 items:[],
                 tempName:'',
                 photoPath:"",
                 userId:''
			}
		},
		components:{
           headData:headJson
		},
		methods:{
           showList:function(){
           	    this.isShowlist=this.isShowlist?false:true;
           },
           exit:function(){
               window.location.href=CONFIG.URL.SSO_LOGOUT+"?service="+CONFIG.URL.SSO_LOGIN+"?service="+ CONFIG.URL.INDEX;
           },
           setUId:function(val){//flag用来
              this.userId=val;
              this.$store.commit('SETUID',val);
              this.tempName=this.items.filter((o)=>{
                 return o.userId==val;
              })[0].organizeName;  
           },
           getHeadPer:function(value){
              this.$emit('onEvent',value);
           }    
		},
		watch:{
          loginerName:function(val,oldVal){
          	 if(val.length==0 || !val){//暂时这么监听是否超时了
          	 	window.location.href=CONFIG.URL.SSO_LOGOUT+"?service="+CONFIG.URL.SSO_LOGIN+"?service=" + CONFIG.URL.INDEX;
          	 }
          }
		},
		mounted:function(){
			  let self=this;
				   self.loginerName=self.newUserInfo.showname;
	               self.items=self.newUserInfo.users;
	               self.tempName=self.items[0].organizeName;
	               self.setUId(self.items[0].userId);
	               imgPreload.setSrc(self.$refs.headIcon,self.newUserInfo.photoUrl,self.imgDatas.img3);
		    }
	}
</script>
<style type="text/css" scoped>
     a{
     	    text-decoration: none;
     }
	.top{
		    width: 100%;
		    background: #fff;
	}
	.topCon{
		width: 1100px;
		height: 60px;
		margin:0px auto;
	}
	.logo{
			line-height: 60px;
			display: inline-block;
		}
	.topR{
       float: right;
	}
	.list{
		float:left;
		position: relative;
	}
	.chooseList{
	    position: absolute;
	    left: 10px;
	    top: 45px;
	    padding: 8px 0;
	    background: #f4f4f4;
	    z-index: 99;
	    border-bottom: 1px solid lightgrey;
	    overflow: hidden;
	}
	.userList{
	    	    border-bottom: 0;
			    padding: 5px;
			    cursor: pointer;
			    width: 100%;
	    }
	.userList:hover{
		    border: 1px solid lightgrey;
		    border-left: 3px solid orange;
		    background: #54a8fc;
	}
	.show_down{
      margin-left:10px;
	}
	.name{
      margin:0 20px;
      line-height: 60px;
      cursor:pointer;
	}
	.name:hover{
	  color: #55a8fd;
	}
	.iconHg{
		width: 40px;
	    height: 40px;
	    border-radius: 50%;
        -moz-border-radius:50%;
        -webkit-border-radius:50%;
		vertical-align: middle;
	}
	.exit{
		display: inline-block;
		line-height: 60px;
		margin:0 20px;
	}
	.exit:hover{
		 color: #55a8fd;
	}
</style>
