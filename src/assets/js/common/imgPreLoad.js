export default (function(){
  var myImage,cb,_scope;
  var img=new Image;
  img.onload=function(){
  	    myImage.src=this.src;
        img=null;
        cb?cb.call(_scope):null;
  }
  return {
  	/*
  	 imageElement:dom对象
  	 src:图片所在的服务器地址
  	 imgUrl:图片的本地默认地址
  	 callback:回调函数
  	 scope:作用域
  	 */
  	 setSrc:function(imageElement,src,imgUrl,callback,scope){
         myImage=imageElement;
         myImage.src=imgUrl;
         img.src=src;//图片通过src加载
         cb=callback;
         _scope=scope||null;
       }
  }  
})()