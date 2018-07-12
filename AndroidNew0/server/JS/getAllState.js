var request=require('request');
var myDate=new Date();
var time=myDate.toLocaleDateString()+" "+myDate.toLocaleTimeString();
var requestData={
    
        "request": {
            "device": { 
                "f0a825b7-c7be":{},
                "c13efd70-f5ab":{},
                "577b9999-39b1":{},
                "f276ae0c-e603":{}
            }
        },
        "meta": { 
            "agent": "browser", 
            "type": "/device/car", 
            "requestAt": ""+time+"", 
            "timeOut": 4000
        }
}

var getAllState=function(callback){
    request({
        url: "http://120.76.226.75:9527/simuac/v1/device/car",
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var source=require('./airConditioning');
            
            source.air1.key=body.response.device['f0a825b7-c7be'].statusData['001']['001'].value;
            source.air1.temperature=body.response.device['f0a825b7-c7be'].statusData['002']['001'].value;
            source.air1.speed=body.response.device['f0a825b7-c7be'].statusData['001']['003'].value;
            source.air1.mode=body.response.device['f0a825b7-c7be'].statusData['001']['002'].value;
            
            source.air2.key=body.response.device['c13efd70-f5ab'].statusData['001']['001'].value;
            source.air2.temperature=body.response.device['c13efd70-f5ab'].statusData['002']['001'].value;
            source.air2.speed=body.response.device['c13efd70-f5ab'].statusData['001']['003'].value;
            source.air2.mode=body.response.device['c13efd70-f5ab'].statusData['001']['002'].value;
           
            source.air3.key=body.response.device['577b9999-39b1'].statusData['001']['001'].value;
            source.air3.temperature=body.response.device['577b9999-39b1'].statusData['002']['001'].value;
            source.air3.speed=body.response.device['577b9999-39b1'].statusData['001']['003'].value;
            source.air3.mode=body.response.device['577b9999-39b1'].statusData['001']['002'].value;         
            
            source.air4.key=body.response.device['f276ae0c-e603'].statusData['001']['001'].value;
            source.air4.temperature=body.response.device['f276ae0c-e603'].statusData['002']['001'].value;
            source.air4.speed=body.response.device['f276ae0c-e603'].statusData['001']['003'].value;
            source.air4.mode=body.response.device['f276ae0c-e603'].statusData['001']['002'].value;           
        
        }
        callback();
});
        
}

module.exports=getAllState;