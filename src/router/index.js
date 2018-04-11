import Vue from 'vue'
import Router from 'vue-router'
/*import CARMANAGE from 'components/page/car-manage'
import ERROR from 'components/common/404'*/
const CARMANAGE=r=>require(['components/page/car-manage.vue'],r);
const ERROR =r=>require(['components/common/404.vue'],r);


Vue.use(Router)

const routes=new Router({
  mode:'history',
  routes:[
    {
    	path:'/car-manage',
      name:'car-manage-list',
    	component:CARMANAGE
    },
    {
      path:'*',
      name:'error',
      component:ERROR
    }
  ]
})
export default routes
