/**
 * http://usejsdoc.org/
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'media',
	multipleStatements: true
});

var connection1 = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'user',
	multipleStatements: true
});

var client={};

/**
 * http://usejsdoc.org/
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'media',
	multipleStatements: true
});

var connection1 = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'user',
	multipleStatements: true
});

var client={};

client.insertactivity=function(data,callback){
	connection.query('INSERT INTO `activity` (`activity_id`, `activity_name`,`host_name`, `sdate`, `edate`, `comments`,`ip_address`) VALUES (?, ?, ?, ?, ?,?,?)',
	[data.event_type,data.event_name,data.host_name,new Date(Date.now()),data.valid_till,data.description,data.ipAddress],function(err,res){
		if(err){
			console.log(err);
			callback(true);
		}else{
			//if(res)
			callback(false,res);

		}
	});
}



client.getContentList=function(callback){
	connection.query('SELECT `content`.`activity_id`, `content`.`media_url`, `content`.`thumbnail_url`, `content`.`type`, `content`.`media_id`, `content`.`posted_on`, `activity`.`activity_name` FROM `content`,`activity` where content.activity_id=activity.activity_id  order by  content.activity_id',function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			//if(res)
			callback(true,res);

		}
	});
}

client.getActivityList=function(callback){
	connection.query('SELECT * FROM `activity`',function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			//if(res)
			callback(res);

		}
	});
}
client.getMediaContent=function(data,callback){
	var query="select * from `content` where activity_id=? and type=?";
	connection.query(query,
			[data.activity_id,data.type],function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			callback(true,res)
		}
	});
}


client.getMediaType=function(data,callback){
	var query="SELECT distinct activity_id FROM `activity`";
	console.log('shgggggggggggggggggggggggg')
	connection.query(query,function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			console.log('aaaaaaaaaaaaaaaaaaaa')
			callback(true,res)
		}
	});
}


client.getMediaInfo=function(data,callback){
	var query="SELECT distinct activity_id FROM `content` where type='jpg' or type='png' or type='jpeg' or type='ico'";
	console.log('shgggggggggggggggggggggggg')
	connection.query(query,function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			var arrayVal=[];
			if(res.length>0){
				getDetailedInfo(arrayVal,res,connection,callback);

			}
		
		}
	});
}

getDetailedInfo=function(arrayVal,res,connection,callback){
var query="SELECT * FROM `content` where activity_id=? and (type='jpg' or type='png' or type='jpeg' or type='ico')";
connection.query(query,[res[arrayVal.length].activity_id],function(err,res1){
		if(err){
			console.log(err);
			callback(false);
		}else{

			arrayVal.push(res1);
			console.log(arrayVal)
			if(arrayVal.length===res.length){
				console.log('aaaaaaaaaaaaaaaaaaaa')
				console.log(res1)
			callback(true,arrayVal)
			}else{
				getDetailedInfo(arrayVal,res,connection,callback)
			}

		}
	})

}


client.getMp4Info=function(data,callback){
	var query="SELECT distinct activity_id FROM `content` where (type='mp4' or type='live')";
	console.log('shgggggggggggggggggggggggg')
	connection.query(query,function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			var arrayVal=[];
			console.log(res,arrayVal.length)
			if(res.length>0){
				getDetailedmp4Info(arrayVal,res,connection,callback);
			}
			

		}
	});
}

getDetailedmp4Info=function(arrayVal,res,connection,callback){
var query="SELECT * FROM `content` where activity_id=? and (type='mp4' or type='live')";
connection.query(query,[res[arrayVal.length].activity_id],function(err,res1){
		if(err){
			console.log(err);
			callback(false);
		}else{

			arrayVal.push(res1);
			console.log(arrayVal)
			if(arrayVal.length===res.length){
				console.log('aaaaaaaaaaaaaaaaaaaa')
				console.log(res1)
			callback(true,arrayVal)
			}else{
				getDetailedmp4Info(arrayVal,res,connection,callback)
			}

		}
	})

}





client.insertMediaContent=function(param,callback){
	var query="INSERT INTO `content` (`activity_id`, `media_url`, `thumbnail_url`, `type`,`media_id`,`posted_on`) VALUES (?, ?, ?, ?,?,?)";
	connection.query(query,
			[param.activity_id,param.media_url,param.thumbnail_url,param.type,param.media_id,param.posted_on],function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			callback(true,res)
		}
	});
}
var insertClient=function(query,param,callback){
	connection.query(query,param,
			function(err,res){
		if(err){
			connection.rollback();
			console.log(err);
		}else{
			callback();
		}
	});
}

client.remove=(fs,callback)=>{
	var query="select content.media_url url from content,activity where activity.edate<=? and content.activity_id=activity.activity_name";
	connection.query(query,[new Date(Date.now())],(err,res)=>{
		if(err){
			console.log()
			callback(true);
		}else{
			console.log(res.length+'       '+this.sql);	
			for(var i=0;i<res.length;i++){
				console.log(res[i].url);
				 fs.unlink(res[i].url,(err,res)=>{
					 if(err){
					 console.log(err)
				 }else{
					 console.log('resssssssssssssssssssss')
				 }
				 });
			}
			callback(false,'success');
			
		}
	});
	
}
exports.client=client;


/*client.loginCheck=function(data,callback){
	var query="select * from `content` where activity_id=? and type=?";
	connection.query(query,
			[data.activity_id,data.type],function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			callback(true,res)
		}
	});
}*/


client.getDegree=function(param,callback){
	var query="select distinct `degree` from `education_details`";
	connection1.query(query,function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			callback(true,res)
		}
	});
}
client.getCollege=function(param,callback){
	var query="select distinct `institution` from `education_details`";
	connection1.query(query,function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			callback(true,res)
		}
	});
}



var insertClient=function(query,param,callback){
	connection.query(query,param,
			function(err,res){
		if(err){
			connection.rollback();
			console.log(err);
		}else{
			callback();
		}
	});
}
exports.client=client;