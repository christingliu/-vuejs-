import judge from  './judge';
import leftJson from  './lefter-data';
/*
 permissionName 权限的名称
 userID 
 cb 回调函数
 */
export default (userId,permissionName,cb)=>{
     permissionName==''?(cb?cb([]):null):judge(userId,leftJson[permissionName],function(jsCon,perm){
          
         if(perm.length == 0 && permissionName!=null){//暂时都是返回正常返回
          cb?cb([]):null;
         }else{
          cb?cb(jsCon):null;
        }
    }); 
}