const ipAdress='124.207.145.166';
const Rxports = {
	URL:{
    	SSO_LOGIN   : 'http://${ipAdress}:9212/login',//单点登录
        SSO_LOGOUT  : 'http://${ipAdress}:9212/logout',//单点退出
        REGISTER    : 'http://${ipAdress}:50442/index.mvc',//注册
        INDEX       : 'http://localhost:9013/',//数校首页
        CHECK_LOGIN : 'http://${ipAdress}:50484',//检查是否登陆及得到登陆信息
        SETUSER     : 'http://${ipAdress}:50484/setuser.jsp',//设置登录
        AUTHORIZATION:"/json/authorization/?",
        //"/doc/mock2.json?",//用户权限
        // "authorization": "/json/authorization/", //用户权限
        EXPORT     : 'http://${ipAdress}:50441/reps/dm/tempimport/studentlist.mvc',//新生导入
        EXPORT_TEACHER:'http://${ipAdress}:50441/reps/dm/tempimport/teacherlist.mvc?orgTypes=21,31,34,51',//教职工的导入
        EXPORT_PARENT:'http://${ipAdress}:50441/reps/school/executeimport/parentlist.mvc',//家长的导入
        IMPORT_SALARY_ADDRESS:'http://www.baidu.com'//导入工资下载模板的地址
    },
    //本地存储key(暂时没用)
    STORE:{
        STU_DATA:'stu_data',//学生详细信息数据
        COURSE_TABLE_DATA:'course_table_data',
        ACCESS_TOKEN:'access_token'//登陆token

    },
    //课程管理下面的教师管理
    TEACHERTEACH:{
        TYPE:'multiple' //single班级课程只能添加一个老师  multiple为可添加多个老师
    },
    MUSTCREATEACCOUNT:true //添加学生或教师时是否必须创建账户，宁夏必须
}

export default Rxports;




















































