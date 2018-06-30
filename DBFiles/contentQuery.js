var client = {};
var ndvdmediadatabase = require('./ndvd-media-database');
var ndvduserdatabase = require('./ndvd-user-database');

client.insertactivity = function (data, callback) {
	ndvdmediadatabase.then(function (connection) {
		connection.query('INSERT INTO `activity` (`activity_id`, `activity_name`,`host_name`, `sdate`, `edate`, `comments`,`ip_address`) VALUES (?, ?, ?, ?, ?,?,?)', [data.event_type, data.event_name, data.host_name, new Date(Date.now()), data.valid_till, data.description, data.ipAddress], function (err, res) {
			if (err) {
				callback(true);
			} else {
				callback(false, res);

			}
		});
	});
}

client.getContentList = function (callback) {
	ndvdmediadatabase.then(function (connection) {
		connection.query('SELECT `content`.`activity_id`, `content`.`media_url`, `content`.`thumbnail_url`, `content`.`type`, `content`.`media_id`, `content`.`posted_on`, `activity`.`activity_name` FROM `content`,`activity` where content.activity_id=activity.activity_id  order by  content.activity_id', function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(true, res);

			}
		});
	});
}

client.getActivityList = function (callback) {
	ndvdmediadatabase.then(function (connection) {
		connection.query('SELECT * FROM `activity`', function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(res);

			}
		});
	});
}

client.getMediaContent = function (data, callback) {
	var query = "select * from `content` where activity_id=? and type=?";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, [data.activity_id, data.type], function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(true, res)
			}
		});
	});
}

client.getMediaType = function (data, callback) {
	var query = "SELECT distinct activity_id FROM `activity`";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(true, res)
			}
		});
	});
}

client.getMediaInfo = function (data, callback) {
	var query = "SELECT distinct activity_id FROM `content` where type='jpg' or type='png' or type='jpeg' or type='ico'";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, function (err, res) {
			if (err) {
				callback(false);
			} else {
				var arrayVal = [];
				if (res.length > 0) {
					getDetailedInfo(arrayVal, res, connection, callback);

				}

			}
		});
	});
}

getDetailedInfo = function (arrayVal, res, connection, callback) {
	var query = "SELECT * FROM `content` where activity_id=? and (type='jpg' or type='png' or type='jpeg' or type='ico')";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, [res[arrayVal.length].activity_id], function (err, res1) {
			if (err) {
				callback(false);
			} else {
				arrayVal.push(res1);
				if (arrayVal.length === res.length) {
					callback(true, arrayVal)
				} else {
					getDetailedInfo(arrayVal, res, connection, callback)
				}
			}
		});
	});

}

client.getMp4Info = function (data, callback) {
	var query = "SELECT distinct activity_id FROM `content` where (type='mp4' or type='live')";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, function (err, res) {
			if (err) {
				callback(false);
			} else {
				var arrayVal = [];
				if (res.length > 0) {
					getDetailedmp4Info(arrayVal, res, connection, callback);
				}


			}
		});
	});
}

getDetailedmp4Info = function (arrayVal, res, connection, callback) {
	var query = "SELECT * FROM `content` where activity_id=? and (type='mp4' or type='live')";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, [res[arrayVal.length].activity_id], function (err, res1) {
			if (err) {
				callback(false);
			} else {
				arrayVal.push(res1);
				if (arrayVal.length === res.length) {
					callback(true, arrayVal)
				} else {
					getDetailedmp4Info(arrayVal, res, connection, callback)
				}

			}
		});
	});

}

client.insertMediaContent = function (param, callback) {
	var query = "INSERT INTO `content` (`activity_id`, `media_url`, `thumbnail_url`, `type`,`media_id`,`posted_on`) VALUES (?, ?, ?, ?,?,?)";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, [param.activity_id, param.media_url, param.thumbnail_url, param.type, param.media_id, param.posted_on], function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(true, res)
			}
		});
	});
}

var insertClient = function (query, param, callback) {
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, param,
			function (err, res) {
				if (err) {
					connection.rollback();
				} else {
					callback();
				}
			});
	});
}

client.remove = (fs, callback) => {
	var query = "select content.media_url url from content,activity where activity.edate<=? and content.activity_id=activity.activity_name";
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, [new Date(Date.now())], (err, res) => {
			if (err) {
				callback(true);
			} else {
				for (var i = 0; i < res.length; i++) {
					fs.unlink(res[i].url, (err, res) => {
						if (err) {
							console.log(err)
						} else {
							console.log('resssssssssssssssssssss')
						}
					});
				}
				callback(false, 'success');

			}
		});
	});

}

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

client.getDegree = function (param, callback) {
	var query = "select distinct `degree` from `education_details`";
	ndvduserdatabase.then(function (connection) {
		connection.query(query, function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(true, res)
			}
		});
	});
}

client.getCollege = function (param, callback) {
	var query = "select distinct `institution` from `education_details`";
	ndvduserdatabase.then(function (connection) {
		connection.query(query, function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(true, res)
			}
		});
	});
}

var insertClient = function (query, param, callback) {
	ndvdmediadatabase.then(function (connection) {
		connection.query(query, param,
			function (err, res) {
				if (err) {
					connection.rollback();
				} else {
					callback();
				}
			});
	});
}

exports.client = client;