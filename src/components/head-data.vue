<template>
	<div class="nav"> 
	  <div class="navCon"> 
	      <ul>
		      <li v-for="item in items" @click="trigger(item)" v-if="item.isShow">
		        <a v-bind:class="{active:item.isSelected}">{{item.menuName}}</a>
		      </li> 
	      </ul> 
	  </div>
	  </div>
</template>
<script type="text/javascript">
import getHeadData from 'assets/js/common/head';
import {menuName} from 'assets/js/common/head'
	export default{
		name:'headJson',
		data(){
			return{
				items:''
			}
		},
		props:['title'],
		methods:{
			trigger:function(value){
                this.changeIsSelected(value.id);
				this.$emit('onGetPer',value['permissions'])
			},
			changeIsSelected:function(ele){

               for(var i=0;i<this.items.length;i++){
               	  if(this.items[i].id==ele){
               	  	this.items[i].isSelected=true;
                  }else{
                  	this.items[i].isSelected=false;
                  }
               } 
			}
		},
		watch:{
			'title':{
				immediate:true,
				deep:true,
				handler:function(val,oldVal){
	           	    let self=this;
					getHeadData (val,function(value){
						self.items=value;
						if(value.length==0){
                            self.$emit('onGetPer','');
						}else{
							self.$set(self.items[0],'isSelected',true);
							self.$emit('onGetPer',self.items[0].permissions);
						}
	                 })
		        } 
		    }
		}
	}
</script>
<style type="text/css" scoped>
	.nav{
		width:100%;
		height: 60px;
		border-top: 1px solid #e2e9f0;
	}
	.navCon {
    width: 1100px;
    height: inherit;
    line-height: 60px;
    margin: 0 auto;
   }
   .navCon ul{
   	overflow:hidden;
   }
   .navCon ul li{
   	  float: left;
      margin-right: 50px;
      list-style: none;
   }
   .navCon ul li a{
   	    cursor: pointer;
	    display: inline-block;
	    line-height: 30px;
	    font-size: 16px;
	    color: #617083;
   }
   .navCon ul li .active{
      	  color:#55a8fd;
   }
   .navCon ul li a:hover{
   	  color:#55a8fd;
   }
</style>