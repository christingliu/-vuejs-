const [schoolUrl,
       moralUrl,
       meetingroomUrl,
       logisticsUrl,
       carUrl]=['','','','',''];
let lefter={
    "SHUXIAO_DC": [
        {
            "id": "school-manage",
            "permissions": "SHUXIAO_DC_SC",
            "name": "学校管理",
            "className": "icon_school",
            "href": schoolUrl+"/car-manage",
            "isShow": false
        },
        {
            "id": "calendar-manage",
            "permissions": "SHUXIAO_DC_CA",
            "name": "校历管理",
            "className": "icon_calender",
            "href": schoolUrl+"/html/calender-base/calendar-manage.html",
            "isShow": false
        },
        {
            "id": "eclass-manage",
            "permissions": "SHUXIAO_DC_CL",
            "name": "班级管理",
            "className": "icon_class",
            "href": schoolUrl+"/html/class-base/class-manage.html",
            "isShow": false
        },
        {
            "id": "student-manage",
            "name": "学生管理",
            "permissions": "SHUXIAO_DC_ST",
            "className": "icon_student nolink",
            "href":"javascript:void(0);",
            "isShow": false,
            "sublistname": [
                {
                    "id": "manage",
                    "name": "管理",
                    "permissions": "SHUXIAO_DC_ST_MA",
                    "href": schoolUrl+"/html/student-base/student.html",
                    "isShow": false
                },
                {
                    "id": "change",
                    "name": "调班",
                    "permissions": "SHUXIAO_DC_ST_CT",
                    "href": schoolUrl+"/html/class-base/class-choose-manage.html",
                    "isShow": false
                },
                {
                    "id": "merge",
                    "name": "合班",
                    "permissions": "SHUXIAO_DC_ST_CM",
                    "href": schoolUrl+"/html/class-base/class-merge-manage.html",
                    "isShow": false
                },
                {
                    "id": "split",
                    "name": "拆班",
                    "permissions": "SHUXIAO_DC_ST_CS",
                    "href": schoolUrl+"/html/class-base/class-split-manage.html",
                    "isShow": false
                },
                {
                    "id": "transfer-manage",
                    "name": "转校管理",
                    "permissions": "SHUXIAO_DC_ST_TR",
                    "className": "icon_student nolink",
                    "isShow": false,
                    "href":"javascript:void(0);",
                    "sublistname": [{
                        "id": "into",
                        "name": "转入新生",
                        "permissions": "SHUXIAO_DC_ST_TR_TI",
                        "href": schoolUrl+"/html/student-base/student-into-manage.html",
                        "isShow": false
                    },
                    {
                        "id": "audit",
                        "name": "转出审核",
                        "permissions": "SHUXIAO_DC_ST_TR_TO",
                        "href":schoolUrl+ "/html/school-base/transfer-check-again.html",
                        "isShow": false
                    }
                ]
                }
            ]
        },
        {
            "id": "staff-manage",
            "permissions": "SHUXIAO_DC_TE",
            "name": "教职工管理",
            "className": "icon_teacher nolink",
            "href":"javascript:void(0);",
            "isShow": false,
            "sublistname": [
                {
                    "id": "estaff-manage",
                    "name": "教职工管理",
                    "permissions": "SHUXIAO_DC_TE_TM",
                    "href": schoolUrl+"/html/teacher-base/teacher-manage.html",
                    "isShow": false
                },
                {
                    "id": "job-transfer",
                    "name": "人事调动",
                    "permissions": "SHUXIAO_DC_TE_ST",
                    "className": "nolink",
                    "href":"javascript:void(0);",
                    "isShow": false,
                    "sublistname": [
                        {
                            "id": "transfer-staff",
                            "name": "教职工调入",
                            "permissions": "SHUXIAO_DC_TE_ST_TI",
                            "href": schoolUrl+"/html/teacher-base/teacher-call-list.html",
                            "isShow": false
                        }, {
                            "id": "Transfer-audit",
                            "name": "调出审核",
                            "permissions": "SHUXIAO_DC_TE_ST_TO",
                            "href": schoolUrl+"/html/teacher-base/teacher-out-list.html",
                            "isShow": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "graduate-manage",
            "permissions": "SHUXIAO_DC_GM",
            "name": "毕业升学管理",
            "className": "icon_graduation nolink",
            "href":"javascript:void(0);",
            "isShow": false,
            "sublistname": [
                {
                    "id": "graduate-set",
                    "name": "毕业年级设置",
                    "permissions": "SHUXIAO_DC_GM_GS",
                    "href": schoolUrl+"/html/school-base/graduate-grade-manager.html",
                    "isShow": false
                },
                {
                    "id": "enter-manage",
                    "name": "毕业升学管理",
                    "permissions": "SHUXIAO_DC_GM_GE",
                    "href": schoolUrl+"/html/school-base/graduate-grade-enter.html",
                    "isShow": false
                }
            ]
        }

    ],
"SHUXIAO_CS":[
        {
            "id": "grade-manage",
            "permissions": "SHUXIAO_CS_GS_01",
            "name": "年级管理",
            "className":"icon_grade_manage",
            "href": schoolUrl+"/html/course-base/grade-manage.html",
            "isShow": false
        },
        {
            "id": "workandrest-schedule",
            "permissions": "SHUXIAO_CS_WR",
            "name": "作息管理",
            "className": "icon-rest-manage",
            "isShow": false,
            "href":schoolUrl+"/html/course-base/rest-rules-manage.html"
        },
        {
            "id": "course-manage",
            "permissions":"SHUXIAO_CS_CM",
            "name": "课程管理",
            "className": "icon-course-manage nolink",
            "isShow": false,
            "href":"javascript:void(0);",
            "sublistname": [
                {
                    "id": "school-course-set",
                    "name": "学校课程管理",
                    "permissions": "SHUXIAO_CS_CM_SC",
                    "href": schoolUrl+"/html/course-base/school-course-manage.html",
                    "isShow": false
                },
                {
                    "id": "grade-course-set",
                    "name": "年级课程管理",
                    "permissions": "SHUXIAO_CS_CM_GC",
                    "href":schoolUrl+"/html/course-base/grade-course-manage.html",
                    "isShow": false
                },
                {
                    "id": "teacher-teaching-manage",
                    "name": "教师任课管理",
                    "permissions": "SHUXIAO_CS_CM_TC",
                    "href": schoolUrl+"/html/course-base/teacher-teach.html",
                    "isShow": false
                },
                {
                    "id": "class-merge-set",
                    "name": "合班课设置",
                    "permissions": "SHUXIAO_CS_CM_MC",
                    "href": schoolUrl+"/html/course-base/merge-course-manage.html",
                    "isShow": false
                },
                {
                    "id": "fixed-course-set",
                    "name": "固定课设置",
                    "permissions": "SHUXIAO_CS_CM_FC",
                    "href": schoolUrl+"/html/course-base/fixed-course-manage.html",
                    "isShow": false
                }
            ]
        },
        {
           "id": "course-arrange-manage",
           "permissions": "SHUXIAO_CS_CA",
            "name": "排课管理",
            "className": "icon-arranging-course nolink",
            "isShow": false,
            "href":"javascript:void(0);",
            "sublistname": [
                {
                    "id": "arranging-course-rules",
                    "name": "排课规则",
                    "permissions": "SHUXIAO_CS_CA_AR",
                    "href": schoolUrl+"/html/course-base/no-course-time.html",
                    "isShow": false
                },
                {
                    "id": "course-table-manage",
                    "name": "课表管理",
                    "permissions": "SHUXIAO_CS_CA_CM",
                    "href": schoolUrl+"/html/course-base/timetable-manage.html",
                    "isShow": false
                }
            ]
        },
        {

           "id": "check-course-table",
           "permissions": "SHUXIAO_CS_CT",
            "name": "查看课表",
            "className": "icon-course-table nolink",
            "isShow": false,
            "href":"javascript:void(0);",
            "sublistname": [
                {
                    "id": "eclass-course-table",
                    "name": "班级课表",
                    "permissions": "SHUXIAO_CS_CT_CC",
                    "href": schoolUrl+"/html/course-base/class-course-table.html",
                    "isShow": false
                },
                {
                    "id": "student-course-table",
                    "name": "学生课表",
                    "permissions": "SHUXIAO_CS_CT_SC",
                    "href": schoolUrl+"/html/course-base/student-course-table.html",
                    "isShow": false
                },
                {
                    "id": "teacher-course-table",
                    "name": "教师课表",
                    "permissions": "SHUXIAO_CS_CT_TC",
                    "href": schoolUrl+"/html/course-base/teacher-course-table.html",
                    "isShow": false
                },
                {
                    "id": "schools-course-table",
                    "name": "学校总课表",
                    "permissions": "SHUXIAO_CS_CT_OC",
                    "href": schoolUrl+"/html/course-base/school-course-table.html",
                    "isShow": false
                }
            ]
        }
    ],
"SHUXIAO_QE":[
    {
      "id":"salary-manage",
      "permissions":"SHUXIAO_ME_SS",
      "name":"标准设置",
      "className":"icon-standard-set",
       "isShow":false,
       "href":"javascript:void(0);"
    },
    {
        "id":"parents-manage",
        "permissions":"SHUXIAO_ME_AM",
        "name":"授权管理",
        "className":"icon-access-manage",
        "isShow":false,
        "href":"javascript:void(0);"
    },
    {
        "id": "school-course-set",
        "name": "班级德育",
        "className":"icon-classes-moral",
        "permissions": "SHUXIAO_ME_AM_CA",
        "href": "javascript:void(0);",
        "isShow": false
    },
    {
        "id": "school-course-set",
        "name": "学生德育",
        "className":"icon-student-manage",
        "permissions": "SHUXIAO_ME_AM_SA",
        "href": "javascript:void(0);",
        "isShow": false
    },
    {
        "id": "school-course-set",
        "name": "教师德育",
        "className":"icon-teacher-manage",
        "permissions": "SHUXIAO_ME_AM_TA",
        "href": "javascript:void(0);",
        "isShow": false
    },
    {
        "id": "school-course-set",
        "name": "统计查询",
        "className":"icon-total-set",
        "permissions": "SHUXIAO_ME_SQ",
        "href": "javascript:void(0);",
        "isShow": false
    }
],
"SHUXIAO_AS":[
    {
      "id":"salary-manage",
      "permissions":"SHUXIAO_AS_SA",
      "name":"工资管理",
      "className":"icon-salary-manage",
       "isShow":false,
       "href":carUrl+"/html/office-base/salary-manage.html"
    } ,
    {
      "id":"parents-manage",
      "permissions":"SHUXIAO_AS_PM",
      "name":"家长管理",
      "className":"icon-parent-manage",
       "isShow":false,
       "href":carUrl+"/html/parent-base/parent-manage.html"
    }
],
"SHUXIAO_LO":[
    {
        "id":"car-manage",
        "permissions":"SHUXIAO_LO_BM",
        "name":"订车管理",
        "className":"icon-car-manage",
        "isShow":false,
        "href":"javascript:void(0)",
        "sublistname": [
          {
            "id": "car-acount-manage",
            "name": "车辆管理",
            "permissions": "SHUXIAO_LO_BM_CM",
            "href":  carUrl +"/car-manage",
            "isShow": false
          },
          {
            "id": "driver-manage",
            "name": "司机管理",
            "permissions": "SHUXIAO_LO_BM_DM",
            "href":  carUrl +"/driver-manage",
            "isShow": false
          },
          {
            "id": "using-apply",
            "name": "用车申请",
            "permissions": "SHUXIAO_LO_BM_AP",
            "href":  carUrl +"/html/car-apply/car-apply.html",
            "isShow": false
          },
          {
            "id": "audit-manage",
            "name": "用车审核",
            "permissions": "SHUXIAO_LO_BM_AU",
            "href": "/html/car-audit/car-audit.html",
            "isShow": false
          },
          {
            "id": "back-car-manage",
            "name": "还车管理",
            "permissions": "SHUXIAO_LO_BM_GB",
            "href":  carUrl +"/html/back-manage/back-manage.html",
            "isShow": false
          }
        ]
    },
    {
        "id":"goods-manage",
        "permissions":"SHUXIAO_LO_CM",
        "name":"耗材管理",
        "className":"icon-logistics-manage",
        "isShow":false,
        "href":"javascript:void(0);",
        "sublistname":[
         { 
                "id":"basic-setting",
                "permissions":"SHUXIAO_LO_CM_BS",
                "name":"基础设置",
                "isShow":false,
                "href":"javascript:void(0);",
                "sublistname":[
                  {
                    "id":"store-manage",
                    "permissions":"SHUXIAO_LO_CM_BS_ST",
                    "name":"仓库管理",
                    "isShow":false,
                    "href":logisticsUrl+"/html/store-manage/store-manage.html"    
                  },
                  {
                    "id":"provider-manage",
                    "permissions":"SHUXIAO_LO_CM_BS_SU",
                    "name":"供应商管理",
                    "isShow":false,
                    "href":logisticsUrl+"/html/provider-manage/provider-manage.html"    
                  },
                  {
                    "id":"goods-classfy",
                    "permissions":"SHUXIAO_LO_CM_BS_GC",
                    "name":"物品分类",
                    "isShow":false,
                    "href":logisticsUrl+"/html/goods-classfy/add-goods-classfy.html"    
                  },
                  {
                    "id":"goods-life",
                    "permissions":"SHUXIAO_LO_CM_BS_GA",
                    "name":"物品档案",
                    "isShow":false,
                    "href":logisticsUrl+"/html/goods-life/goods-life-list.html" 
                  }
               ]
         },
         {
                "id":"storeroom-manage",
                "permissions":"SHUXIAO_LO_CM_SM",
                "name":"库房管理",
                "isShow":false,
                "href":"javascript:void(0);",
                "sublistname":[
                    {
                       "id":"goods-manage",
                        "permissions":"SHUXIAO_LO_CM_SM_GM",
                        "name":"物品管理",
                        "isShow":false,
                        "href":logisticsUrl+"/html/goods-manage/goods-detail.html" 
                    }
                ]
         }
        ]
    },
    {
        "id":"parents-manage",
        "permissions":"SHUXIAO_LO_CR",
        "name":"会议室管理",
        "className":"icon-meeting-manage",
        "isShow":false,
        "href":"javascript:void(0);",
        "sublistname": [
            {
                "id":"meeting-list",
                "permissions":"SHUXIAO_LO_CR_MA",
                "name":"会议室维护",
                "isShow":false,
                "href":meetingroomUrl + "/html/meeting-list.html"
            } ,
            {
                "id":"meeting",
                "permissions":"SHUXIAO_LO_CR_PR",
                "name":"会议室预约",
                "isShow":true,
                "href":meetingroomUrl + "/html/meeting.html"
            }
        ]
    },
    {
      "id":"salary-manage",
      "permissions":"SHUXIAO_AS_SA",
      "name":"工资管理",
      "className":"icon-salary-manage",
       "isShow":false,
       "href": schoolUrl+"/html/office-base/salary-manage.html"
    }
]
}
export default lefter;