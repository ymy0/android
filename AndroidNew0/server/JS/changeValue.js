var request=require('request');
var changeValue=function(num1,num2,callback){
    var myDate=new Date();
    var time=myDate.toLocaleDateString()+" "+myDate.toLocaleTimeString();
    var postValue;
    if(num1==1){
        postValue={
        "request": {
            "device": { 
                "f0a825b7-c7be": { 
                    "502-003": { 
                        "value_type": "double",
                        "value": ""+num2+"" 
                    }
                }
            }
        },
        "meta": {
            "agent": "browser",
            "type": "/device/rtw",
            "requestAt": ""+time+"",
            "timeOut": 4000
        }
    }}
    if(num1==2){
        postValue={
        "request": {
            "device": { 
                "c13efd70-f5ab": { 
                    "502-003": { 
                        "value_type": "double",
                        "value": ""+num2+"" 
                    }
                }
            }
        },
        "meta": {
            "agent": "browser",
            "type": "/device/rtw",
            "requestAt": ""+time+"",
            "timeOut": 4000
        }
    }}
    if(num1==3){
        postValue={
        "request": {
            "device": { 
                "577b9999-39b1": { 
                    "502-003": { 
                        "value_type": "double",
                        "value": ""+num2+"" 
                    }
                }
            }
        },
        "meta": {
            "agent": "browser",
            "type": "/device/rtw",
            "requestAt": ""+time+"",
            "timeOut": 4000
        }
    }}
    if(num1==4){

        postValue={
        "request": {
            "device": { 
                "f276ae0c-e603": { 
                    "502-003": { 
                        "value_type": "double",
                        "value": ""+num2+"" 
                    }
                }
            }
        },
        "meta": {
            "agent": "browser",
            "type": "/device/rtw",
            "requestAt": ""+time+"",
            "timeOut": 4000
        }
    }}
    request({
        url: "http://120.76.226.75:9527/simuac/v1/device/rtw",
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: postValue
    }, function(error, response) {
        if (!error && response.statusCode == 200) {
            // var source=require('./airConditioning');
            //console.log("5");
            // if(num==1) source.air1.value=body.response.device['f0a825b7-c7be']['502-003'].value;
            // if(num==5) source.air1.value=body.response.device['f0a825b7-c7be']['502-003'].value;
            // if(num==2) source.air2.value=body.response.device['c13efd70-f5ab']['502-003'].value;
            // if(num==6) source.air2.value=body.response.device['c13efd70-f5ab']['502-003'].value;
            // if(num==3) source.air3.value=body.response.device['577b9999-39b1']['502-003'].value;
            // if(num==7) source.air3.value=body.response.device['577b9999-39b1']['502-003'].value;
            // if(num==4) source.air4.value=body.response.device['f276ae0c-e603']['502-003'].value;
            // if(num==8) source.air4.value=body.response.device['f276ae0c-e603']['502-003'].value;
        }
    }); 
    
//});
callback();
   
}

module.exports=changeValue;