<template>
  <div id="app">
    <head-nav v-on:onEvent='getCurHeadPermission'></head-nav>
    <div class="wrap">
        <left-nav  :permission="message" v-on:onLeftMenu="getLefrMenu"></left-nav>
        <div class="wrapR fr">
          <router-view :title="nameList"></router-view>
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import head from 'components/head';
import left from 'components/left';
export default {
  name: 'app',
  data(){
     return{
        currentHeadValue:'',
        leftSelectedMenu:[],
        userInfo:{},
        [Symbol.iterator](){return this;}
     }
  },
  components:{
     headNav:head,
     leftNav:left
  },
  computed:{
         message:function(){
          return this.currentHeadValue
         },
         nameList:function(){   
          this.$set(this.userInfo,'suibian','456');
          console.log('.......',this.userInfo);
          console.log(this.$data[Symbol.iterator]);
          return this.leftSelectedMenu
         }
  },
  methods:{
      getCurHeadPermission:function(value) {
              this.currentHeadValue=value;
      },
      getLefrMenu:function(value){
            this.leftSelectedMenu=value;
      }
  }
}
</script>

<style type="text/css">
.wrap {
    width: 1100px;
    margin: 10px auto 30px;
    overflow: hidden;
}
.wrapR {
    min-height: 599px;
    height: auto;
      width: 900px;
      background: #fff;
      overflow: hidden;
      padding-bottom: 20px;
      display: block;
  }
.fr {
    float: right;
  }
  
</style>
