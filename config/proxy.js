const ipAdress='124.207.145.166';//外网地址
const proxyTable={
	    '/school':'http://${ipAdress}:50134/api',
        '/doc':'http://${ipAdress}:50133',
        '/json':'http://${ipAdress}:50441/api',
        '/rrt':'http://${ipAdress}:50412/files/',
}
module.exports=proxyTable;