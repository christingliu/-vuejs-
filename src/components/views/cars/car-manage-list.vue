<template>
	    <table>
                    <thead>
                        <tr>
                           <th>序号</th>
                           <th>车辆名称</th>
                           <th>车辆号码</th>
                           <th>限乘人数</th>
                           <th>购车日期</th>
                           <th>年审日期</th>
                           <th>是否启用</th>
                           <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span class="index">1</span>
                        </td>
                        <td>本田雅阁</td>
                        <td>京A01234</td>
                        <td>5</td>
                        <td>2017年3月5日</td>
                        <td>2018年4月5日</td>
                        <td>是</td>
                        <td>
                          <div class="handle">
                            <a class="disable">禁用</a>
                            <a class="detail">详细</a>
                            <a class="delete">删除</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> 
</template>
<script type="text/javascript">
	export default {
		name:'car-list',
		data(){
          return{

          }
		},
		props:{
			  result:{
               type:'object',
               required:true
			}
		},
		watch:{
			'result':{
				handler(val,oldVal){
                   console.log(val);
				},
				deep:true
			}
		}
	}
</script>