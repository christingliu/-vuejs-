<template>
	<div>
		<home-title :titles='breakName'></home-title>
		<div v-show="!isShowAdd && !isShowDetail" class="list">
			 <ul class="conditions">
			 	<li v-for="con in conditionList">
			 		<label :for="con.id">
			 		    {{con.name}}:
			 			<input type="text" name="" :id="con.id" @click="showDate(con.id)"/>
			 		</label>
			 	</li>
			 </ul>
			 <a class="btns">查询</a>
             <p class="list-name">
	             <span></span>
	             <span>订车管理列表</span>
             </p>
             <div class="add-btn">
                <a @click="add()">添加</a>
             </div>
             <div class="list-show">
             	<p>
             		<span>共计<i>4</i>条记录</span>
             	</p>
             	<div class="table-list">
                   <!--动态组件-->
                 <component :is="currentView" :content="{}"></component> 
             	</div>
             </div>
		</div>
		<add-car v-show="isShowAdd" v-on:onBack='getParam'></add-car>
    <popMessage :messageData="message"></popMessage>
    <pgBreak :params="{currentPageNum:1,pageCount:7}" v-on:callback="getCurrentNum"></pgBreak>
	</div>
</template>
<script type="text/javascript">

import ADDCAR from 'components/page/add-car'
import homeTitle from 'components/common/break' 
import pgBreak from 'components/common/page-break'
import popMessage from 'components/common/pop-message'
import {mapActions} from 'vuex'
const noData=r=>require(['components/common/no-data.vue'],r);
//const popMessage=r=>require(['components/common/pop-message.vue'],r);

const tableList=r=>require(['components/views/cars/car-manage-list.vue'],r);

	export default{
		name:'car-manage-list',
		data(){
	        return{
	        	    params:[],
                isShowAdd:false,
                isShowDetail:false,
                conditionList:[
                  {
                  	name:'车辆名称',
                  	id:'name-list'
                  },
                  {
                  	 name:'车牌号码',
                  	 id:'num-list'
                  }
                ],
                currentView:noData,
                message:{status:200,message:"您已经保存成功了！"}
	          }
		},
		props:['title'],
		components:{
			"add-car":ADDCAR,
			homeTitle,
       pgBreak,
       noData,
       popMessage
		},
		computed:{
		   breakName(){
	             return this.title
		   }
		},
		methods:{
	        add(){
                 this.isShowAdd=true;
                 this.title.push({name:'添加',id:'1'});
	          },
	        getParam(val){

               let self=this;
               self.isShowAdd=val;
               new Promise(
               	  function(resolve,reject){
               	  	self.title.filter(
		               	(o,i)=>{
		               		if(o.id=='1'){
		                      resolve(i);
		                    } 
		                }
                    )
               	  }
                ).then(function(value){
                self.title.splice(value,1);
               });
	        },
          getCurrentNum(val){
              console.log("0000000",val);
          },
          showDate(val){
            WdatePicker({el:val,startDate:'1980-05-01'});
          },
          callbackMess(){
               console.log('test');
          }
		}
	}
</script>
<style lang="less">
@import  '../../assets/less/base.less';
@import '../../assets/less/pop-message.less';
.list{
		.conditions{
	       margin-top:40px;
	       margin-left:10px;
	       list-style:none;
	        li  {   
		       	  	 float: left;
		       	  	 margin:15px 30px;
		       	  	 & label{
		       	  	 	font-size:14px;
		       	  	 	color:#617083;
		       	  	 }
		       	  	 & input{
		       	  	 	 width:238px;
		                 height: 38px;
		                 line-height: 38px;
		                 padding: 10px;
		                 border: 1px solid #e6ecef;
		       	  	 }
	       	    }
	    }
	    .btns{
	    	  cursor:pointer;
	       	  font-size:14px;
	       	  color:#fff;
	       	  text-align: center;
	       	  display: inline-block;
	       	  width: 96px;
	       	  height: 36px;
	       	  line-height: 36px;
	       	  margin-left: 30px;
	       	  background-color:#55a8fd;
	       	  border-radius: 5px;
	       	  -webkit-border-radius:5px;
	       	  -moz-border-radius:5px;
	        }
	    p.list-name{
	    	width: 100%;
	    	margin-top:40px;
	    	font-size:18px;
	    	color:#3c495a;
	    	text-align: center;
	    }
	    .add-btn{
	    	//margin-top: px;
           width:90px;
           margin:25px auto;
	    	a{
	    		  width:100%;
                  height: 28px;
                  line-height: 28px;
                  display: inline-block;
                  font-size: 14px;
                  color:#fff;
                  background-color:#ffac4b;
                  text-align: center;
                  cursor: pointer; 
                  border-radius: 15px;
                  -webkit-border-radius:15px;
                  -moz-border-radius:15px;
	    	}
	    }
	    .list-show{
            p{
            	font-size: 14px;
            	color:#617083;
            	text-align: right;
            	margin-right: 20px;
            	margin-bottom: 15px;
            	i{
            		font-style: normal;
            		color:#ff8813;
            	}
            }
            .table-list{
            	width: 880px;
            	height: auto;
            	margin:0px auto;
            	table{
            		width: 100%;
            		text-align: center;
            		border:1px solid #cfdbe6;
            		border-collapse: collapse;
                   tr{
                   	  font-size: 14px;
                   	  color:#617083;
                   	  height: 58px;
                   	  line-height: 58px;
                   	 border-bottom: 1px solid #cfdbe6;
                      td{
                      	  span.index{
                      	  	 color:#55a8fd;
                      	  }
                      	  div.handle{
                      	  	 a{
                      	  	 	&:hover{
                                     cursor: pointer;
                                     color:#55a8fd;
                      	  	 	}
                      	  	 }
                      	  }
                      }
                   }
            	}
            }
	    }
    }    
</style>