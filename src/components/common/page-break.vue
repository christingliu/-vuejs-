<template>
	 <div class="page">
	 	 <div class="page">
	        <a href="javascript:void(0);" data-num="PREV" @click="minus()">
	            <img :src="images.prev">
	        </a>
	        <a href="javascript:void(0);" v-for="item in pageItems" data-num="item.value" :class="{blueBg:item.isSelected}" @click="changeCurPGNum(item.value)">{{item.value}}</a>
	        <a href="javascript:void(0);" data-num="NEXT" @click="add()">
	             <img :src="images.next">
	        </a>
        </div>
	 </div>
</template>
<script type="text/javascript">
	export default{
		name:'page-break',
		props:{
           params:{
           	  type:Object,
           	  required:true,
           	  default:()=>{
           	  	return {
           	  		currentPageNum:null,
           	  		pageCount:null
           	  	    }
           	  }
           }
		},
		data(){
			return{
               POINT:'...',
               PREV:'-',
               NEXT:'+',
               currentPN:null,
               pageCN:null,
               images:{
               	 prev:require('assets/images/common/icon_rowF.png'),
               	 next:require('assets/images/common/icon_rowB.png')
               },
               pageItems:[]
			}
		},
        watch:{
           'params':{
           	  handler(val,oldVal){
               this.currentPN=(val.currentPageNum-val.pageCount>0?(()=>this.$emit('callback',val.pageCount)):val.currentPageNum);
              this.pageCN=val.pageCount;
              this.pageInit();
           	  },
           	  deep:true
           }
        },
		methods:{
			pageInit(){
	            let  self = this;
		        let pagedata =[];
		        if (self.pageCN <= 6) {
		            for (let i = 1; i <=self.pageCN; i++) {
		                pagedata.push(i);
		            }
		        } else {
		            if (self.currentPN >= 1 && self.currentPN < 5) {
		                pagedata.push(1, 2, 3, 4, 5, self.POINT, self.pageCN);
		            } else if (self.currentPN >= 5 && (self.pageCN - self.currentPN) + 1 < 5) {
		                pagedata.push(1, self.POINT, self.pageCN - 4, self.pageCN - 3, self.pageCN - 2, self.pageCN - 1, self.pageCN);
		            } else if (self.currentPN >= 5 && (self.pageCN - self.currentPN) + 1 >= 5) {
		                pagedata.push(1, POINT, self.currentPN - 1, self.currentPN, self.currentPN + 1, POINT, self.pageCN)
		            }
		        }
		        self.setClass(pagedata,self.currentPN);
			},
			setClass(val){
				let self=this;
				val.forEach((o,index)=>{
                    if(o==self.currentPN){
                    	val.fill({value:o,isSelected:true},index,index+1);
                       }else{
                       	 val.fill({value:o,isSelected:false},index,index+1);
                       }
                        
				});

			    self.$nextTick(()=>{
			    	self.pageItems.splice(0);//清空数组最好不要直接使用赋值length
                    self.pageItems.push(...val);
			    });
			},
			add(){
			     if(!!this.currentPN && this.currentPN-this.pageCN<0){
			     	this.currentPN++;
			     	this.changeClass();
			     }
			},
			minus(){
                if(!!this.currentPN && this.currentPN-1>0){
			     	this.currentPN--;
			     	this.changeClass();	
			     }
			},
			changeCurPGNum(val){
				this.currentPN=val;
				this.changeClass();
			},
			changeClass(){
			   this.pageInit();
               this.$emit('callback',this.currentPN);
			}
		}
	}
</script>
<style lang="less" scoped>

	.page{
		overflow: hidden;
		text-align: center;
		margin-top: 40px;
    }
    .page img{
    	vertical-align: middle;
    }
    .page a{
		display: inline-block;
		width: 30px;
		height: 30px;
		background: #c0c4cb;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		margin: 0 3px;
		font-size: 12px;
		color: #fff;
		cursor:pointer;
    }
	.page a:hover{
		background: #55a8fd;
	}
	a.blueBg{
		background: #55a8fd;
	}
	a.ellipsis{
		background: none;
		color: #c0c4cb;
		padding-top: 6px;
		margin: 0;
	}
	a.ellipsis:hover{
		background: none;
	}
</style>