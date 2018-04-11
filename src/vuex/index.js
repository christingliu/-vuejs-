import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={//定义状态
	userId:''
}
const mutations={//vue建议mutation类型用大写常量表示
	SETUID(state,val){
       state.userId=val;
	}
}
export default new Vuex.Store({
    state,
    mutations
})