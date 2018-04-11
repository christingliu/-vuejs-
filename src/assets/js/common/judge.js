import $ from './common';
/*
 userId
 json 用户传递的json文件内容
 cb 回调函数
 */
function newJson(value){
    return JSON.parse(JSON.stringify(value));
}
export default (userId,value,cb,flag)=>{
        let json=newJson(value);//这里已经做了深度拷贝
        $.ajax({
      	url:`/json/authorization/?userId=${userId}`,
        success:function(data){
                var permissionList = [];
                if (data.status == "200" && data.data != null && data.data['菜单编码'].length>0) {
                    permissionList = data.data["菜单编码"].split(";");
                    
                           if (!!permissionList) {
                                   for(let i of json){
                                     loop(permissionList,i);//一
                                         if(i['sublistname']){
                                            for(let j of i['sublistname']){
                                                loop(permissionList,j);//二
                                                if(j['sublistname']){
                                                    for(let k of j['sublistname']){
                                                         loop(permissionList,k);//三
                                                    }
                                                }
                                            }
                                         }
                                   }
                            }
                        
                         cb?cb(json,permissionList):null;//回调函数
                    }else{
                        cb?cb(json,[]):null;
                    }
        },
        error:function(){
             cb?cb(json,[]):null;
        }
      });
}
function loop(permission,menu_info) {
    for(let o of permission){
        if(o==menu_info['permissions']){
             menu_info['isShow']=true;
         }
    }
}