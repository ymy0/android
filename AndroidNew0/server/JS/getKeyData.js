var request=require('request');
// var DEVICE0="f0a825b7-c7be";
// var DEVICE1="c13efd70-f5ab";
// var DEVICE2="577b9999-39b1";
// var DEVICE3="f276ae0c-e603";
//获取设备当前状态
//120.76.226.75:9527/simuac/v1/device/rtw实时写502-002风扇
//502-003温度设定
//502-001设备模式  0，1，2，3
//502-002风扇
//502-002风扇

var  getKeyData=function(num,callback){
    if(num==1)
    if(num==2)
    if(num==3)
    if(num==4)
request({
    url: "http://120.76.226.75:9527/simuac/v1/device/car",
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
    },
    body: form
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var source=require('./airConditioning');
      if(num==0) source.air1.key=body.response.device['f0a825b7-c7be'].statusData['001']['001'].value;
      if(num==1) source.air2.key=body.response.device['c13efd70-f5ab'].statusData['001']['001'].value;
      if(num==2) source.air3.key=body.response.device['577b9999-39b1'].statusData['001']['001'].value;
      if(num==3) source.air4.key=body.response.device['f276ae0c-e603'].statusData['001']['001'].value;
    }
}); 
callback();
}
module.exports=getKeyData;