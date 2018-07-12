var request=require('request');

var  changeModel=function(num1,num2,callback){
    var myDate=new Date();
    var time=myDate.toLocaleDateString()+" "+myDate.toLocaleTimeString();
    var form;
    if(num1==1) form={
        "request": {
            "device": { 
                "f0a825b7-c7be": { 
                    "502-001": { 
                        "value_type": "int",
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
    }
    if(num1==2) form={
        "request": {
            "device": { 
                "c13efd70-f5ab": { 
                    "502-001": { 
                        "value_type": "int",
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
    }
    if(num1==3) form={
        "request": {
            "device": { 
                "577b9999-39b1": { 
                    "502-001": { 
                        "value_type": "int",
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
    }
    if(num1==4) form={
        "request": {
            "device": { 
                "f276ae0c-e603": { 
                    "502-001": { 
                        "value_type": "int",
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
    }
    request({
        url: "http://120.76.226.75:9527/simuac/v1/device/rtw",
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: form
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // var source=require('./airConditioning');
            // if(num1==1) source.air1.model=body.response.device['f0a825b7-c7be']['502-001'].value;
            // if(num1==2) source.air2.model=body.response.device['c13efd70-f5ab']['502-001'].value;
            // if(num1==3) source.air3.model=body.response.device['577b9999-39b1']['502-001'].value;
            // if(num1==4) source.air4.model=body.response.device['f276ae0c-e603']['502-001'].value;
        }
    }); 
    callback();
    }
    module.exports=changeModel;