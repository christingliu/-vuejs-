require('../web-uploader/webuploader.less');//这个可以放到需要上传的页面引入
export default {

    init:function(_opt,_cb,_scope){
    	require.ensure(['web-uploader/webuploader.js'],function(require){
    		var WebUploader = require('web-uploader/webuploader.js');
            if ( !WebUploader.Uploader.support() ) {
                var result = window.confirm('抱歉，当前页面的上传技术不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
                if(result){
                    location.href = 'http://www.adobe.com/support/flashplayer/downloads.html';
                }
                throw new Error( 'WebUploader does not support the browser you are using.' );
            }
            var uploader = WebUploader.create({
                swf: '/bundle/js/Uploader.swf',
                server:  _opt.url,//先去弄一个假地址
                fileVal: _opt.fileName || 'file',//设置文件上传域的name。
                pick: {
                    id: _opt.pick.id,
                    innerHTML : _opt.pick.innerHTML,
                    multiple: !!_opt.pick.multiple//是否开起同时选择多个文件能力
                },
                // runtimeOrder:'flash',
                auto: !!_opt.auto,
                fileNumLimit: !!_opt.fileNumLimit || 400,//文件总数量
                fileSizeLimit:opt.fileSizeLimit || 10*1024*1024,//文件的大小
                method :'POST',
                formData: _opt.formData || {},
                accept:[_opt.accept],
                compress:opt.compress?opt.compress:false,//上传图片的时候需要剪裁图片保存填好这里的选项 
                thumb:opt.thumb?opt.thumb:false,//生成图片缩略图 转换成base64 目前只支持jpg,jpeg
                //因采用同一个对象，url会发生重复的问题。所以目前修改为单线程上传。
                threads:1
            });
            uploader.on('error',function (code) {
                switch (code) {
                    case 'Q_EXCEED_NUM_LIMIT':
                        alert('超出队列长度，请减少选中的文件数量。');
                        break;
                    case 'Q_EXCEED_SIZE_LIMIT':
                        alert('选中文件的总大小超过指定上限，请减少大小后继续上传。');
                        break;
                    case 'Q_TYPE_DENIED':
                        alert('文件类型不满足条件，请上传正确的文件。');
                        break;
                }
            });
            _cb.call(_scope || null, uploader);

    	},'web-uploader-trunk');
    },
    //上传接受的类型
    getAccept: {
        'IMG': {
            title: '图片',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        },
        'IMG1': {
            title: '图片',
            extensions: 'jpg,jpeg',
            mimeTypes: 'image/jpeg'
        },
        'IMG2':{
            title:'图片',
            extensions: 'jpg,jpeg,bmp,png',
            mimeTypes: 'image/jpeg,image/jpg,image/bmp,image/png'
        },
        'XLS': {
            title: 'Excel',
            extensions: 'xls,xlsx',
            mimeTypes: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        },
        'DOC': {
            title: 'doc文档',
            extensions: 'doc,docx',
            mimeTypes: 'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        },
        'DOCX': {
            title: 'docx文档',
            extensions: 'docx',
            mimeTypes: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        },
        'CSV': {
            title: 'csv文档',
            extensions: 'csv',
            mimeTypes: 'text/csv'
        },
        'TXT': {
            title: 'txt文档',
            extensions: 'txt',
            mimeTypes: 'text/plain'
        },


    },
    getEvents: {
        //当文件被加入队列之前触发，此事件的handler返回值为false，则此文件不会被添加进入队列。
        'BEFORE_FILE_QUEUED': 'beforeFileQueued',
        //当文件被加入队列以后触发。
        'FILE_QUEUED': 'fileQueued',
        //当一批文件添加进队列以后触发
        'FILES_QUEUED': 'filesQueued',
        //文件开始上传前触发，一个文件只会触发一次
        'UPLOAD_START': 'uploadStart',
        //当开始上传流程时触发。
        'START_UPLOAD': 'startUpload',
        //当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数,大文件在开起分片上传的前提下此事件可能会触发多次。
        "UPLOAD_BEFORE_SEND":'uploadBeforeSend',
        //上传过程中触发，携带上传进度。
        'UPLOAD_PROGRESS': 'uploadProgress',
        //当文件上传出错时触发。
        'UPLOAD_ERROR': 'uploadError',
        //当文件上传成功时触发。
        'UPLOAD_SUCCESS': 'uploadSuccess',
        //不管成功或者失败，文件上传完成时触发。
        'UPLOAD_COMPLETE': 'uploadComplete',
        //当validate不通过时，会以派送错误事件的形式通知调用者。
        'ERROR': 'error',
        //当 uploader 被重置的时候触发。
        'RESET':'reset',
        //当开始上传流程暂停时触发。
        'STOP_UPLOAD':'stopUpload'
    }

}