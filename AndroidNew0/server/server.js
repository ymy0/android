var express = require("express");
var app = express();
//var hostName = '127.0.0.1';
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
 
// bodyParser.json解析json数据格式的
app.use(bodyParser.json());
var recommend=require('./JS/recommend');
var getAllState=require('./JS/getAllState');
var changeKey=require('./JS/changeKey');
var changeValue=require('./JS/changeValue');
//var getKeyData=require('./JS/getKeyData');
var source=require('./JS/airConditioning');
var changeModel=require('./JS/changeModel');
var changeSpeed=require('./JS/changeSpeed');
var time=new Date();
var hours=time.getHours();

var day=time.getDate();
count=4;
count1=1;
var elecCount=0;
var elecData={
    isOk: true,
    data:{
        "01":[{date: "2018/7/"+day, energy:0}],
        "02":[{date: "2018/7/"+day, energy:0}],
        "03":[{date: "2018/7/"+day, energy:0}],
        "04":[{date: "2018/7/"+day, energy:0}],
    }
}

 var rec={
    1:{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],
        13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[]},
    2:{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],
        13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[]},
    3:{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],
        13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[]},
    4:{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],
        13:[],14:[],15:[],16:[],17:[],18:[],19:[],20:[],21:[],22:[],23:[]}
} 

var record={
    isOk: true,
    data: {
      temperatures: [
        {id:"01",date: "2018/7/"+day+" "+hours, temperature: "26"},
        {id:"02",date: "2018/7/"+day+" "+hours, temperature: "26"},
        {id:"03",date: "2018/7/"+day+" "+hours, temperature: "26"},
        {id:"04",date: "2018/7/"+day+" "+hours, temperature: "26"},
      ]
    }
  }
  var record1={
    isOk: true,
    data: {
      temperatures: [
        {id:"01",date: "2018/7/"+day+" "+hours, temperature: "26"}
      ]
    }
  }
  var record2={
    isOk: true,
    data: {
      temperatures: [
        {id:"02",date: "2018/7/"+day+" "+hours, temperature: "26"}
      ]
    }
  }
  var record3={
    isOk: true,
    data: {
      temperatures: [
        {id:"03",date: "2018/7/"+day+" "+hours, temperature: "26"}
      ]
    }
  }
  var record4={
    isOk: true,
    data: {
      temperatures: [
        {id:"04",date: "2018/7/"+day+" "+hours, temperature: "26"}
      ]
    }
  }
setInterval(function(){
    getAllState(function(){
    hours++;
    if(hours==24) {
    hours=hours-24;day++;
    elecCount++;
      elecData.data["01"][elecCount]={date: "2018/7/"+day, energy:0};
      elecData.data["02"][elecCount]={date: "2018/7/"+day, energy:0};
      elecData.data["03"][elecCount]={date: "2018/7/"+day, energy:0};
      elecData.data["04"][elecCount]={date: "2018/7/"+day, energy:0};
}
    record.data.temperatures[count]={id:"01",date: "2018/7/"+day+" "+hours, temperature: source.air1.temperature};count++;
    record.data.temperatures[count]={id:"02",date: "2018/7/"+day+" "+hours, temperature: source.air2.temperature};count++;
    record.data.temperatures[count]={id:"03",date: "2018/7/"+day+" "+hours, temperature: source.air3.temperature};count++;
    record.data.temperatures[count]={id:"04",date: "2018/7/"+day+" "+hours, temperature: source.air4.temperature};count++;
    record1.data.temperatures[count1]={id:"01",date: "2018/7/"+day+" "+hours, temperature: source.air1.temperature};
    record2.data.temperatures[count1]={id:"02",date: "2018/7/"+day+" "+hours, temperature: source.air2.temperature};
    record3.data.temperatures[count1]={id:"03",date: "2018/7/"+day+" "+hours, temperature: source.air3.temperature};
    record4.data.temperatures[count1]={id:"04",date: "2018/7/"+day+" "+hours, temperature: source.air4.temperature};
    count1++;
    if(source.air1.key==1) elecData.data["01"][elecCount].energy++;
    if(source.air2.key==1) elecData.data["02"][elecCount].energy++;
    if(source.air3.key==1) elecData.data["03"][elecCount].energy++;
    if(source.air4.key==1) elecData.data["04"][elecCount].energy++;
    rec[1][hours].push(source.air1.temperature);
    rec[2][hours].push(source.air2.temperature);
    rec[3][hours].push(source.air3.temperature);
    rec[4][hours].push(source.air4.temperature);
    source.air1.recommandTemperature=recommend(rec[1][hours]);
    source.air2.recommandTemperature=recommend(rec[2][hours]);
    source.air3.recommandTemperature=recommend(rec[3][hours]);
    source.air4.recommandTemperature=recommend(rec[4][hours]);
});
},
3600000
);


app.get("/:id",function(req,res){
        var ID = req.params.id;
        switch(ID){
        case '00': getAllState(function(){ res.send(source);});
        break;

        case '01': getAllState(function(){ res.send(source.air1);
        });
        break;

        case '02': getAllState(function(){ res.send(source.air2);});
        break;

        case '03': getAllState(function(){ res.send(source.air3);});
        break;

        case '04': getAllState(function(){ res.send(source.air4);});
        break;
        case'getelecdata':res.send(elecData);
        break;
        default: res.send("error--can't find the url you want to get");
        }
});
app.get("/00/getrecord",function(req,res){
    res.send(record);
});
app.get("/01/getrecord",function(req,res){
    res.send(record1);
});
app.get("/02/getrecord",function(req,res){
    res.send(record2);
});
app.get("/03/getrecord",function(req,res){
    res.send(record3);
});
app.get("/04/getrecord",function(req,res){
    res.send(record4);
});
app.post("/changestatus",function(req,res){
	getAllState(function(){ 
        var responseData={
            isOk:true,
            error:""
        }
        var ID=req.body.id;
        var key=req.body.data.key;
        var value=req.body.data.value;
        value=Number(value); 
            switch(ID){
            case '01':switch(key){
                case'speed':if(value>-1&&value<5&&source.air1.key==1)  {
                    responseData.isOk=true;
                    changeSpeed(1,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4;Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'temperature':
                if(value>19&&value<31&&source.air1.key==1){
                    
                        responseData.isOk=true;
                    getAllState(function(){ 
                        changeValue(1,value,function(){
                            res.send(responseData);
                            });
                    });
                }
                else {
                        responseData.isOk=false;
                        responseData.error="the value is incorrect，it should be 20-30;Or the Air conditioning is shut down";
                        res.send(responseData);
                    }
                break;
                case'mode':if(value>-1&&value<5&&source.air1.key==1)  {
                    responseData.isOk=true;
                    changeModel(1,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4;Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'key':if(value==0||value==1)  {
                    responseData.isOk=true;
                    changeKey(1,value,function(){
                        //console.log("????")
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be '0'or'1'";
                    res.send(responseData);
                }
                break;
                default: 
                responseData.isOk=false;
                responseData.error="your key is not existent";
                res.send(responseData);
            }
            break;

            case '02':switch(key){
                case'speed':if(value>-1&&value<5&&source.air2.key==1)  {
                    responseData.isOk=true;
                    changeSpeed(2,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4,Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'temperature':
                if(value>19&&value<31&&source.air2.key==1){
                        responseData.isOk=true;
                        getAllState(function(){ 
                    changeValue(2,value,function(){
                    res.send(responseData);
                    });});
                }
                else {
                        responseData.isOk=false;
                        responseData.error="the value is incorrect，it should be 20-30,Or the Air conditioning is shut down";
                        res.send(responseData);
                    }
                break;
                case'mode':if(value>-1&&value<5&&source.air2.key==1)  {
                    responseData.isOk=true;
                    changeModel(2,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4,Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'key':if(value==0||value==1)  {
                    responseData.isOk=true;
                    changeKey(2,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be '0'or'1'";
                    res.send(responseData);
                }
                break;
                default: 
                responseData.isOk=false;
                responseData.error="your key is not existent";
                res.send(responseData);
            }
            break;
            case '03':switch(key){
                case'speed':if(value>-1&&value<5&&source.air3.key==1)  {
                    responseData.isOk=true;
                    changeSpeed(3,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4,Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'temperature':
                if(value>19&&value<31&&source.air3.key==1){
                        responseData.isOk=true;
                        getAllState(function(){ 
                    changeValue(3,value,function(){
                    res.send(responseData);
                    });});}
                else {
                        responseData.isOk=false;
                        responseData.error="the value is incorrect，it should be 20-30,Or the Air conditioning is shut down";
                        res.send(responseData);
                    }
                break;
                case'mode':if(value>-1&&value<5&&source.air3.key==1)  {
                    responseData.isOk=true;
                    changeModel(3,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4,Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'key':if(value==0||value==1)  {
                    responseData.isOk=true;
                    changeKey(3,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be '0'or'1'";
                    res.send(responseData);
                }
                break;
                default: 
                responseData.isOk=false;
                responseData.error="your key is not existent";
                res.send(responseData);
            }
            break;
            case '04':switch(key){
                case'speed':if(value>-1&&value<5&&source.air4.key==1)  {
                    responseData.isOk=true;
                    changeSpeed(4,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4,Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'temperature':
                if(value>19&&value<31&&source.air4.key==1){
                        responseData.isOk=true;
                        getAllState(function(){ 
                    changeValue(4,value,function(){
                    res.send(responseData);
                    });});}
                else {
                        responseData.isOk=false;
                        responseData.error="the value is incorrect，it should be 20-30,Or the Air conditioning is shut down";
                        res.send(responseData);
                    }
                break;
                case'mode':if(value>-1&&value<5&&source.air4.key==1)  {
                    responseData.isOk=true;
                    changeModel(4,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be 0-4,Or the Air conditioning is shut down";
                    res.send(responseData);
                }
                break;
                case'key':if(value==0||value==1)  {
                    responseData.isOk=true;
                    changeKey(4,value,function(){
                    res.send(responseData);
                });}
                else {
                    responseData.isOk=false;
                    responseData.error="the value is incorrect，it should be '0'or'1'";
                    res.send(responseData);
                }
                break;
                default: 
                responseData.isOk=false;
                responseData.error="your key is not existent";
                res.send(responseData);
            }
            break;
            default: 
            responseData.isOk=false;
            responseData.error="your ID is not existent";
            res.send(responseData);
            }});
});

app.listen(port,function(){
   console.log("服务器运行在http://119.23.109.182:3000");
});
