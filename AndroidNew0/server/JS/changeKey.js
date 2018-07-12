var request=require('request');

var  changeKey=function(num1,num2,callback){
    var myDate=new Date();
    var time=myDate.toLocaleDateString()+" "+myDate.toLocaleTimeString();
    var postKey;
    if(num1==1){
        postKey={
        "request": {
            "device": { 
                "f0a825b7-c7be": { 
                    "501-001": { 
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
}
              
    if(num1==2){ 
postKey={
                "request": {
            "device": { 
                "c13efd70-f5ab": { 
                    "501-001": { 
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
                }}
    if(num1==3){
postKey={
            "request": {
        "device": { 
            "577b9999-39b1": { 
                "501-001": { 
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
    }}
    if(num1==4){
        postKey={
            "request": {
        "device": { 
            "f276ae0c-e603": { 
                "501-001": { 
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
    }

    request({
        url: "http://120.76.226.75:9527/simuac/v1/device/rtw",
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: postKey
    }, function(error, response) {
        //console.log("sososo");
        if (!error && response.statusCode == 200) {
           // console.log("???");
            //console.log(2);
            // var source=require('./airConditioning');
            // if(num==1) source.air1.key=body.response.device['f0a825b7-c7be']['501-001'].value;
            // if(num==2) source.air2.key=body.response.device['c13efd70-f5ab']['501-001'].value;
            // if(num==3) source.air3.key=body.response.device['577b9999-39b1']['501-001'].value;
            // if(num==4) source.air4.key=body.response.device['f276ae0c-e603']['501-001'].value;
        }
    }); 

callback();
}
module.exports=changeKey;
