<template>
	<div class="list">
	  <div class="uploader-img">
	  	<div class="img-show">
	  		<img src="../../assets/images/add-pictures.png">
	  	</div>
	  	<ul>
	  		<li>
	  			<a id="picker">＋选择图片</a>
	  		</li>
	  		<li>
	  			<p>上传类型:图片文件</p>
	  			<p>允许上传文件个数:1</p>
	  			<p>允许上传文件大小:10M</p>
	  		</li>
	  	</ul>
	  </div>
	  <div class="add-con">
	  	<ul>
	  		<li v-for="con in conditions">
	  			<label :for="con.id" :class="">
	  			    {{con.name}}:
	  				<input type="text" name="" :id="con.id">
	  				<img v-if="con.isShowImg" src=""/>
	  				<span v-if="con.isSelected" class="red">*</span>
	  			</label>
	  		</li>
	  	</ul>
	  </div>
	  <div class="btn-nav">
	  	<a class="sure">添加</a>
	  	<a class="return" @click="back()">返回</a>
	  </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'addCar',
		data(){
			return{
                 conditions:[{
                 	name:'车辆名称',
                 	id:'name-list',
                 	isSelected:true
                 },{
                 	name:'车牌号码',
                 	id:'num-list',
                 	isSelected:true
                 },{
                 	name:'限乘人数',
                 	id:'people-num',
                 	isSelected:true
                 },{
                 	name:'购车日期',
                 	id:'buy-date',
                 	isSelected:false,
                 	isShowImg:true
                 },{
                 	name:'年审日期',
                 	id:'year-date',
                 	isSelected:false,
                 	isShowImg:true
                 }]
			}
		},
		methods:{
			back(){
				//ajax 提交成功之后返回到上一个层级
                this.$emit('onBack',false);
			}
		}
	}
</script>
<style lang="less" scoped>
@import  '../../assets/less/base.less';
	.uploader-img{
		 width: 900px;
		 margin: 40px auto;
		 overflow: hidden;
		 text-align: center;
        .img-show{
        	display: inline-block;
        	vertical-align: top;
        	width: 198px;
        	height: 198px;
            line-height:198px;
            border:1px dashed #a6b4c3;
            text-align: center;
        }
        ul{
        	display: inline-block;
        	margin-left:24px;
        	list-style:none;
        	overflow: hidden;
        	li {
                 a{  margin-top:15px;
                 	 margin-bottom: 60px;
                     width: 96px;
                     height: 30px;
                     line-height: 30px;
                     display: inline-block;
                     text-align: center;
                     cursor: pointer;
                     &#picker{
                          font-size: 14px;
                          color:#fff;
                          background: #ffac4b url() no-repeat;
                     }
                 }
                 p{
                 	line-height: 28px;
                 	font-size: 12px;
                 	color:#b2b6bd;
                 }
        	}
        }
	}
	.add-con{
		
		ul{  
			overflow: hidden;
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
		       	  	 .red{
		       	  	 	color:red;
		       	  	 }
	       	    }
		}
	}


	.btn-nav{
		width: 900px;
		text-align: center;
		margin-top:50px;
         a{ 
         	font-size: 14px;
         	color:#fff;
         	cursor: pointer;
         	width:96px;
         	text-align: center;
         	height: 30px;
         	line-height: 30px;
            margin:0px 40px;
            display: inline-block;
            border-radius: 15px;
            -moz-border-radius:15px;
            -webkit-border-radius:15px;
            &.sure{
              background-color:#55a8fd;
            }
            &.return{
              background-color:#c0c4cb;
            }
         }
	}
</style>