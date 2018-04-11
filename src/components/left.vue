<template>
	<div class="wrapL fl">
		<ul>   
  		    <li v-for="item in items" v-if="item.isShow">
              <a v-if="item.href.indexOf('void')>0" :class="item.className" >{{item.name}}</a>

  		       <router-link v-else  :to="item.href" tag='a' :class="item.className" @click.native="getLeftMenu(item.href)">{{item.name}}</router-link> 

      		        <ul v-if="item.sublistname && item.sublistname.length>0">

      		        	<li v-for="twoItem in item.sublistname">
                    
                      <a v-if="twoItem.href.indexOf('void')>0">{{twoItem.name}}</a>

      		        		<router-link v-else   :to="twoItem.href" tag='a' @click.native="getLeftMenu(twoItem.href)">{{twoItem.name}}</router-link>

          		        		<ul v-if="twoItem.sublistname && twoItem.sublistname.length>0" class="ml20">

            		        			<li v-for="threeItem in twoItem.sublistname">

            		        				<router-link  :to="threeItem.href" tag='a' @click.native="getLeftMenu(threeItem.href)">{{threeItem.name}}</router-link>

            		        			</li>

          		        		</ul>

      		        	</li>

      		        </ul>
  		    </li>

    </ul>
	</div>
</template>
<script type="text/javascript">
import json from 'assets/js/common/left';
export default{
   data(){
       return{
        items:''
       }
   },
   props:['permission'],
   methods:{
      getLeftMenu:function(val){
          let [self,...name]=[this];//...name相当于数组name的定义解构name=[]
          self.items.forEach(function(o){
             
              if(o.sublistname && o.sublistname.length>0){
                 o.sublistname.forEach(function(v){
                    
                    if(v.sublistname && v.sublistname.length>0){
                        v.sublistname.forEach(function(t){
                          if(t.href==val){
                            name.push({name:o.name,id:o.id});
                            name.push({name:v.name,id:v.id});
                            name.push({name:t.name,id:t.id});
                            self.$emit('onLeftMenu',name);
                          }
                        })
                    }
                    else{
                          if(v.href==val){
                          name.push({name:o.name,id:o.id});
                          name.push({name:v.name,id:v.id});
                          self.$emit('onLeftMenu',name);
                        }
                    }
                 })
              }else{
                  if(o.href==val){
                   name.push({name:o.name,id:o.id});
                   self.$emit('onLeftMenu',name);
                }
              }
          })
      }
   },
   watch:{
       'permission':{
            
            handler:function(val,oldVal){
                    let self=this;
                    json(self.$store.state.userId,val,function(data){
                     
                      self.items=data;
                      if(data.length>0){
                          var arr=self.items[0];
                         if(arr.sublistname && arr.sublistname.length>0){
                            if(arr.sublistname[0].sublistname && arr.sublistname[0].sublistname.length>0){
                                
                                 self.$router.push(arr.sublistname[0].sublistname[0].href);
                                 self.getLeftMenu(arr.sublistname[0].sublistname[0].href);
                              }else{
                                
                                self.$router.push(arr.sublistname[0].href);
                                self.getLeftMenu(arr.sublistname[0].href);
                              }
                           }else{
                               self.$router.push(arr.href);
                               self.getLeftMenu(arr.href);
                           }
                      }else{
                          self.$router.push('/');
                      }  
                   });
                },
           deep:true
         }
   }
}
</script>
<style lang="less" scoped>
@import '../assets/less/icon.less';
@import '../assets/less/base.less';
.wrapL{
	width: 180px;
    background: #fff;
    padding: 34px 20px 40px;
    overflow: hidden;
    ul li {
            a{
        	  display: inline-block;
    		    line-height: 45px;
    		    font-size: 16px;
    		    color: #617083;
    		    padding-left: 35px;
            }
          > ul li a{
             display: inline-block;
            line-height: 30px;
            font-size: 14px;
          }
      }
    a.router-link-active{
       color:#55a8fd;
    }
    a:not(.router-link-active):hover{
       color:#55a8fd;
    }
}
</style>