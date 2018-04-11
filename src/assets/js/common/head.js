import judge from './judge';
import headerJson from './header-data';
/*
userId 用户身份
cb 回调函数
 */
export default (userId,cb)=>{

    judge(userId,headerJson.default,function(jsCon,perm){
    	
         if(perm.length == 0){//权限为0的话也返回json 至于以后有什么需要考虑的在添加
         	 cb?cb(''):null;
         }else{
		    cb?cb(jsCon):null;
        }
    });
}