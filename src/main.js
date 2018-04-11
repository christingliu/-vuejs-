// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'

import vue2 from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import util from 'assets/js/common/common'
import  url from 'assets/js/url/apiUrl'

import _ from 'lodash'
vue2.config.productionTip = false; //设置为false以阻止vue在启动时生成生产提示
//在浏览器 显示console.log 提示语
vue2.prototype.util=util
vue2.prototype.url=url

util.isLogin(function(data){//判断是否登录 登录成功保存data 创建vue实例对象
	vue2.prototype.newUserInfo=data;
	new vue2 ({
		  el: '#app',
		  router,
		  store,
		  template: '<App/>',
		  components: { App }
		  });
});
/* eslint-disable no-new */