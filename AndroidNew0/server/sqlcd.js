
 
//插入空调信息
function insert_con_imf(con_id,con_loc,con_brand,con_power){
  var mysql  = require('mysql');  
 
  var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : 'root',       
    port: '3306',                   
    database: 'smartcon', 
  }); 
 
  connection.connect();

  var  Sql = 'INSERT INTO con_imf(con_id,con_loc,con_brand,con_power) VALUES(?,?,?,?)';//设备编号，设备位置，设备品牌,设备功率
  var  SqlParams = [con_id,con_loc,con_brand,con_power];//插入的值，都不能为空
  //['f0a825b7-c7be','客厅','美的']
  insert_data(Sql,SqlParams);
}



//插入智能联动信息
function insert_smart_imf(smart_name,smart_tem,smart_mode,id){
  var mysql  = require('mysql');  
 
  var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : 'root',       
    port: '3306',                   
    database: 'smartcon', 
  }); 
 
  connection.connect();
 
  var Sql='INSERT INTO smart_imf(smart_id,smart_name,smart_tem,smart_mode,id) VALUE(?,?,?,?,?)';//智能联动ID，智能联动名字，智能联动设置的温度，智能联动设置的模式，设备编号
  var SqlParams=['',smart_name,smart_tem,smart_mode,id];//插入的数据，第一个参数为自增数据，可以为空，不用传参
  //['','睡眠','27','制冷','f0a825b7-c7be']
  insert_data(Sql,SqlParams);
}



//插入用户历史操作信息
function insert_user_history(user_time,first_add,second_add,status,idid,user_otime){
  var mysql  = require('mysql');  
 
  var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : 'root',       
    port: '3306',                   
    database: 'smartcon', 
  }); 
 
  connection.connect();
 
  var Sql='INSERT INTO user_history(user_time,first_add,second_add,status,idid,user_otime) VALUE(?,?,?,?,?,?)';//用户操作当前时间（包含日期），一级地址，二级地址，修改的值，设备编号，用户当前操作时间（不包括日期）
  var SqlParams=[user_time,first_add,second_add,status,idid,user_otime];
  //['2018-7-15 09:00:00','002','003','27','f0a825b7-c7be','09:00:00']
  insert_data(Sql,SqlParams);
}



//插入设备一天中的运行时间和温度情况
function insert_con_day(day,ididid){
  var mysql  = require('mysql');  
 
  var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : 'root',       
    port: '3306',                   
    database: 'smartcon', 
  }); 
 
  connection.connect();
 
  var Sql='INSERT INTO con_day(con_day_id,ope_time,day,ididid) VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';//用户操作当前时间（包含日期），一级地址，二级地址，修改的值，设备编号，用户当前操作时间（不包括日期）
  var SqlParams=['',0,day,ididid,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//id（自增，不用传，为空），运行时间（初始设为0，以后更新），日期，设备编号
  insert_data(Sql,SqlParams);
}



//更新设备某时段的温度
function update_con_day(day,ididid,x_tem,data){
  var mysql  = require('mysql');  //四个参数为：日期，设备编号，时段，要更改的温度
 
  var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : 'root',       
    port: '3306',                   
    database: 'smartcon', 
  }); 
 
  connection.connect();
 
  var modSql = 'UPDATE con_day SET '+x_tem+' = ? WHERE day = ?,ididid = ?';
  var modSqlParams = [data,day,ididid];

  connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
    }        
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result);
    console.log('-----------------------------------------------------------------\n\n');
  });
  connection.end();
}



//更新设备运行时间
function update_con_day_ope_time(day,ididid,data){
  var mysql  = require('mysql');  //三个参数为：日期，设备编号，要更新的运行时间
 
  var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : 'root',       
    port: '3306',                   
    database: 'smartcon', 
  }); 
 
  connection.connect();
 
  var modSql = 'UPDATE con_day SET ope_time = ? WHERE day = ?,ididid = ?';
  var modSqlParams = [data,day,ididid];

  connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
    }        
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result);
    console.log('-----------------------------------------------------------------\n\n');
  });
  connection.end();
}



//插入数据函数接口
function insert_data(Sql,SqlParams)
{  var mysql  = require('mysql');  //四个参数为：日期，设备编号，时段，要更改的温度

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port: '3306',
    database: 'smartcon',
  });

  connection.query(Sql,SqlParams,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }        

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:',result);        
    console.log('-----------------------------------------------------------------\n\n');  
  });
  connection.end();
}



/*
//查询数据接口
connection.query(Sql,SqlParams,function (err, result) {
  if(err){
    console.log('[QUERY ERROR] - ',err.message);
    return;
  }        

  console.log('--------------------------QUERY----------------------------');       
  console.log(result);        
  console.log('-----------------------------------------------------------------\n\n'); 
});
*/

exports.insert_con_imf=insert_con_imf;
exports.insert_smart_imf=insert_smart_imf;
exports.insert_user_history=insert_user_history;
exports.insert_con_day=insert_con_day;
exports.update_con_day=update_con_day;
exports.update_con_day_ope_time=update_con_day_ope_time;


