var client = {};
var bcrypt = require('bcrypt');
var ndvduserdatabase = require('./ndvd-user-database');
const saltRounds = 10;

client.login = function (data, callback) {
	// async connection to database
	ndvduserdatabase.then(function (connection) {
		// query database 
		connection.query('select *  from login_table where user_id=?', [data.userId], function (err, res) {
			if (err) {
				return callback(err);
			} else {
				if (res.length == 0) {
					return callback(false)
				} else {
					bcrypt.compare(data.password, res[0].password, function (err, resp) {
						if (err) {
							return callback(err);
						} else if (resp) {
							obj = {
								user: res[0].user_id,
								type: res[0].type
							}
							return callback(obj);
						} else {
							return callback(false);
						}
					});
				}
			}
		});
	});
};

// client.login = function(req, res) {
// 	// async connection to database
// 	console.log("module.exports",module.exports);
//     // module.exports.login.then(function(connection){
//         // query database 
//         module.exports.login.query('select *  from login_table where user_id=?', [data.userId], function (error, results, fields) {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             res.send(results);
//         });
//     // });
// };

// client.login = function (data, callback) {
// 	console.log("test", database);
// 	database().then(function (connection) {
// 		// query database 
// 		connection.query('select *  from login_table where user_id=?', [data.userId], function (error, results, fields) {
// 			if (error) {
// 				console.log(error);
// 				return;
// 			}
// 			res.send(results);
// 		});
// 	});
// }
// console.log("Testing-2");
// module.exports.login = function(req, res) {
// 	console.log("Testing-3");
//     // async connection to database
//     database().then(function(connection){
//         // query database 
//         connection.query('select *  from login_table where user_id=?', [data.userId], function(error, results, fields) {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             res.send(results);
//         });
//     });
// };

// client.login = function (data, callback) {
// 	loginconnection.query('select *  from login_table where user_id=?', [data.userId], function (err, res) {
// 		if (err) {
// 			return callback(err);
// 		} else {
// 			if (res.length == 0) {
// 				return callback(false)
// 			} else {
// 				bcrypt.compare(data.password, res[0].password, function (err, resp) {
// 					if (err) {
// 						return callback(err);
// 					} else if (resp) {
// 						obj = {
// 							user: res[0].user_id,
// 							type: res[0].type
// 						}
// 						return callback(obj);
// 					} else {
// 						return callback(false);
// 					}
// 				});
// 			}
// 		}
// 	});
// }

client.register = function (userId, password, type, callback) {
	bcrypt.hash(password, saltRounds, function (err, hash) {
		// Store hash in your password DB.
		param = [userId, hash, type]
		loginconnection.query('insert login_table  (user_id,password,type) values(?,?,?)', param,
			function (err, res) {
				if (err) {
					connection.rollback();
					callback(error, false);
				} else {
					callback(null, true);
				}
			});
	});
}

client.isUserValid = function (userId, callback) {
	ndvduserdatabase.then(function (connection) {
		connection.query('select count(user_id) as count from personal_details where user_id=?', [userId], function (err, res) {
			if (err) {
				callback(false);
			} else {
				callback(res[0].count > 0);
			}
		});
	});
}

client.insertAccount = function (data, callback) {
	getTransactionId(data,
		function (transactionId) {
			ndvduserdatabase.then(function (connection) {
				connection.query('insert into `accounts` (`accountNo`,`panNo`,`aadharNo`,`rentPeriod`,`toDate`,`ifscCode`,`payable`,`hire`,`vendorCode`,`days`,`item`,`amount`,`description`,`purchaseDate`,`giftGivenDate`,`surveyNo`,`name`,`type`,`transactionId`,`transactionDate`) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [data.accountNumber, data.panNo, data.aadharNo, data.rentPeriod, data.to, data.ifscCode, data.payRec, data.payRecType, data.vendorCode, data.noOfDays, data.item, data.amount, data.description, data.purchaseDate, data.giftGivenDate, data.surveyNo, data.name, data.type1, transactionId, data.transactionDate], function (err, res) {
					if (err) {
						callback(false, res);
					} else {
						callback(true, res);
					}
				});
			});
		});
}

client.updateAccount = function (data, callback) {
	ndvduserdatabase.then(function (connection) {
		connection.query('update `accounts` set `accountNo`=?,`panNo`=?,`rentPeriod`=?,`toDate`=?,`aadharNo`=?,`ifscCode`=?,`payable`=?,`hire`=?,`vendorCode`=?,`days`=?,`item`=?,`amount`=?,`description`=?,`purchaseDate`=?,`giftGivenDate`=?,`surveyNo`=?,`name`=?,`type`=?,`transactionDate`=? where `transactionId`=?', [data.accountNumber, data.panNo, data.rentPeriod, data.toDate, data.aadharNo, data.ifscCode, data.payRec, data.payRecType, data.vendorCode, data.noOfDays, data.item, data.amount, data.description, data.purchaseDate, data.giftGivenDate, data.surveyNo, data.name, data.type1, data.transactionDate, data.transactionId], function (err, res) {
			if (err) {
				callback(false, res);
			} else {
				callback(true, res);
			}
		});
	});
}


client.getUserDetails = function (data, callback) {
	var query = "select * from personal_details where user_id=?;";
	query += "select * from family_details where user_id=?;";
	query += "select * from education_details where user_id=?;";
	query += "select * from occupation_details where user_id=?;";
	query += "select * from card_details where user_id=?;";
	query += 'select * from bank_details where user_id=?;';

	ndvduserdatabase.then(function (connection) {
		connection.query(query, [data.user_id, data.user_id, data.user_id, data.user_id, data.user_id, data.user_id], function (err, res) {
			if (err) {
				callback(false);
			} else {
				var details = {}
				details.personal = res[0];
				details.family = res[1];
				details.educational = res[2];
				details.occupational = res[3];
				details.card = res[4];
				details.bank = res[5];
				callback(true, details)
			}
		});
	});
}

client.slectUsers = function (data, callback) {
	var query = "select * from card_details where type=?";
	var param = [data.type];
	/*if(data.length){
		if(data[1]=='='){
			query+=" where ?? = ? ";
		}else if(data[1]=='<'){
			query+=" where ?? < ? ";
		}else if(data[1]=='>'){
			query+=" where ?? > ? "
		}
		param.push(data[0]);
		param.push(data[2]);
	}
	for(var i=3;i<data.length;i=i+3){
		param.push(data[i]);
		param.push(data[i+2]);
		if(data[i+1]=='='){
			query+=" and ?? = ? ";
		}else if(data[i+1]=='<'){
			query+=" and ?? < ? ";
		}else if(data[i+1]=='>'){
			query+=" and ?? > ? "
		}else if(data[i+1]=='like'){
			query+=" and ?? like ? "
		}
	}*/
	ndvduserdatabase.then(function (connection) {
		connection.query(query,
			param,
			function (err, res) {
				if (err) {
					callback(false);
				} else {
					callback(true, res);


				}
			});
	});
}

client.selectTransaction = function (data, callback) {
	var query = "select * from `accounts` where `transactionId`=?";
	var param = [data.transactionId];
	ndvduserdatabase.then(function (connection) {
		connection.query(query,
			param,
			function (err, res) {
				if (err) {
					callback(false);
				} else {
					callback(true, res);
				}
			});
	});
}

client.selectAll = function (data, callback) {
	var query = "select * from `accounts`";
	var param = [];
	ndvduserdatabase.then(function (connection) {
		connection.query(query,
			param,
			function (err, res) {
				if (err) {
					callback(false);
				} else {
					callback(true, res);


				}
			});
	});
}

client.deleteUser = function (data, callback) {
	var query = "delete from family_details where user_id=?;";
	query += "delete from education_details where user_id=?;";
	query += "delete from occupation_details where user_id=?;";
	query += "delete from personal_details where user_id=?;";
	query += "delete from card_details where user_id=?;";
	var param = [data, data, data, data, data];
	ndvduserdatabase.then(function (connection) {
		connection.query(query,
			param,
			function (err, res) {
				if (err) {
					callback(false);
				} else {
					callback(true, res);
				}
			});
	});
}

client.insertUser = function (data, familyData, callback) {
	getuserId(data,
		function (userId) {
			var length = familyData.length;
			for (var iter = 0; iter < length; iter++) {
				familyData[iter].push(userId);
				familyData[iter].push(iter);
			}
			var query = "INSERT INTO `personal_details` (`name`, `city`,`country`,`postal_code`,`father_name`, `family_name`, `nick_name`, `age`, `dob`, `sex`, `address`, `landmark`, `phone`, `email`, `marital_status`, `wedding_date`, `user_id`) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?, ?, ?, ?, ?, ?, ?, ?)";
			var param = [data.first_name, data.city, data.country, data.postal_code, data.last_name, " ", " ", data.user_age, data.dob, data.gender, data.address, " ", data.phone_no, data.mail_id, data.mariatal_status, "", userId];
			insertClient(query, param, function () {
				query = "INSERT INTO `education_details` (`degree`, `year`, `institution`, `user_id`) VALUES (?,?,?,?)";
				param = [data.degree, data.year, data.college, userId];
				insertClient(query, param, function () {
					query = "INSERT INTO `family_details` (`name`, `relation`, `dob`, `working_status`, `comments`, `user_id`,`indexVal`) VALUES ?";
					param = familyData;
					insertClient(query, [param], function () {
						query = "INSERT INTO `login_table` (`user_id`, `password`, `type`) VALUES (?,?,?)";
						param = familyData;
						insertClient(query, [data.first_name, data.first_name + '' + data.last_name, data.type], function () {
							query = "INSERT INTO `occupation_details` (`user_id`, `type`, `company`, `designation`) VALUES (?, ?, ?, ?)";
							param = [userId, data.employment, data.company, data.designation];
							insertClient(query, param, function () {
								query = "INSERT INTO `card_details` (`user_id`, `name`, `age`, `sex`,`phone`,`path`,`type`) VALUES (?, ?, ?, ?,?,?,?)";
								param = [userId, data.first_name + ' ' + data.last_name, data.user_age, data.gender, data.phone_no, data.path, data.type];
								insertClient(query, param, function () {
									if (data.type === 'employee') {
										query = "INSERT INTO `bank_details` (`user_id`, `accountNo`, `ifscCode`, `panNo`,`adharNo`,`dateJoining`,`monthlySalary`,`department`) VALUES (?, ?, ?, ?,?,?,?,?)";
										param = [userId, data.accountNo, data.ifscCode, data.panNo, data.adharNo, data.dateJoining, data.monthlySalary, data.department];
										insertClient(query, param, function () {
											connection.commit();
											callback(true);
										});
									} else {
										connection.commit();
										callback(true);
									}
								});
							});
						})
					});
				});
			});
		})
}

client.updateUser = function (data, familyData, userId, callback) {
	var name = [];
	var relation = [];
	var dob = [];
	var working_status = [];
	var comments = [];
	var userid = [];
	for (var i = 0; i < familyData.length; i++) {
		name[i] = familyData[i][0];
		relation[i] = familyData[i][1];
		dob[i] = familyData[i][2];
		working_status[i] = familyData[i][3];
		comments[i] = familyData[i][4];
		userid[i] = userId;
	}
	var query = "update `personal_details` set `name`=?, `city`=?,`country`=?,`postal_code`=?,`father_name`=?, `family_name`=?, `nick_name`=?, `age`=?, `dob`=?, `sex`=?, `address`=?, `landmark`=?, `phone`=?, `email`=?, `marital_status`=?, `wedding_date`=? where `user_id`=?";
	var param = [data.first_name, data.city, data.country, data.postal_code, data.last_name, "", "", data.user_age, data.dob, data.gender, data.address, "", data.phone_no, data.mail_id, data.mariatal_status, "", userId];
	insertClient(query, param, function () {
		query = "update `education_details` set `degree`=?, `year`=?, `institution`=? where `user_id`=?";
		param = [data.degree, data.year, data.college, userId];
		insertClient(query, param, function () {
			query = "select * from `family_details` where `user_id`=?";
			param = [userId];
			ndvduserdatabase.then(function (connection) {
				connection.query(query, param, function (err, ress) {
					if (ress.length > 0) {
						if (familyData.length > ress.length) {
							var arrLength = 0;
							familyData.forEach(function (value, index) {
								if (arrLength < ress.length) {
									query = "update `family_details` set `name`=?,`relation`=?,`dob`=?,`working_status`=?,`comments`=? where `user_id`=? and `indexVal`=?";
									param = [value[0], value[1], value[2], value[3], "", userId, arrLength];
									arrLength++;
									insertClient(query, param, function () {

										if (arrLength === ress.length) {

										} else {

										}
									})
								} else {
									query = "insert into `family_details` (`name`,`relation`,`dob`,`working_status`,`comments`,`user_id`,`indexVal`) values(?,?,?,?,?,?,?)";
									param = [value[0], value[1], value[2], value[3], "", userId, arrLength];
									arrLength++;
									insertClient(query, param, function () {
										if (arrLength === ress.length) {
											query = "update `occupation_details` set `type`=?, `company`=?, `designation`=? where `user_id`=?";
											param = [data.employment, data.company, data.designation, userId];
											insertClient(query, param, function () {
												query = "update `card_details` set `name`=?, `age`=?, `sex`=?,`phone`=?,`path`=? where `user_id`=?";
												param = [data.first_name + ' ' + data.last_name, data.user_age, data.gender, data.phone_no, data.path, data.type, userId];
												insertClient(query, param, function () {
													if (data.type === 'employee') {
														query = "update `bank_details` set `accountNo`=?, `ifscCode`=?, `panNo`=?,`adharNo`=?,`dateJoining`=?,`monthlySalary`=?,`department`=? where `user_id`=?";
														param = [data.accountNo, data.ifscCode, data.panNo, data.aadharNo, data.dateJoining, data.monthlySalary, data.department, userId];
														insertClient(query, param, function () {
															connection.commit();
															callback(true);
														});
													} else {
														connection.commit();
														callback(true);
													}
												});
											});
										} else {

										}
									})
								}
							})
						} else if (familyData.length === ress.length) {
							var len = 0;
							var arrLength = 0;
							familyData.forEach(function (value, index) {
								if (arrLength < ress.length) {
									query = "update `family_details` set `name`=?,`relation`=?,`dob`=?,`working_status`=?,`comments`=? where `user_id`=? and `indexVal`=?";
									param = [value[0], value[1], value[2], value[3], "", userId, index];
									arrLength++;
									insertClient(query, param, function () {
										len++;
										if (arrLength === len) {
											query = "update `occupation_details` set `type`=?, `company`=?, `designation`=? where `user_id`=?";
											param = [data.employment, data.company, data.designation, userId];
											insertClient(query, param, function () {
												query = "update `card_details` set `name`=?, `age`=?, `sex`=?,`phone`=?,`path`=? where `user_id`=?";
												param = [data.first_name + ' ' + data.last_name, data.user_age, data.gender, data.phone_no, data.path, data.type, userId];
												insertClient(query, param, function () {
													if (data.type === 'employee') {
														query = "update `bank_details` set `accountNo`=?, `ifscCode`=?, `panNo`=?,`adharNo`=?,`dateJoining`=?,`monthlySalary`=?,`department`=? where `user_id`=?";
														param = [data.accountNo, data.ifscCode, data.panNo, data.aadharNo, data.dateJoining, data.monthlySalary, data.department, userId];
														insertClient(query, param, function () {
															connection.commit();
															callback(true);
														});
													} else {
														connection.commit();
														callback(true);
													}
												});
											});
										}
									})
								}
							})

						} else {
							var arrLength = 0;
							ress.forEach(function (value, index) {
								if (arrLength < familyData.length) {
									query = "update `family_details` set `name`=?,`relation`=?,`dob`=?,`working_status`=?,`comments`=? where `user_id`=? and `indexVal`=?";
									param = [familyData[arrLength][0], familyData[arrLength][1], familyData[arrLength][2], familyData[arrLength][3], "", userId, index];
									arrLength++;
									insertClient(query, param, function () {

										if (arrLength === ress.length) {

										} else {

										}
									})
								} else {
									query = "delete from `family_details` where `user_id`=? and `indexVal`=?";
									param = [userId, arrLength];
									arrLength++;
									insertClient(query, param, function () {

										if (arrLength === ress.length) {
											query = "update `occupation_details` set `type`=?, `company`=?, `designation`=? where `user_id`=?";
											param = [data.employment, data.company, data.designation, userId];
											insertClient(query, param, function () {
												query = "update `card_details` set `name`=?, `age`=?, `sex`=?,`phone`=?,`path`=? where `user_id`=?";
												param = [data.first_name + ' ' + data.last_name, data.user_age, data.gender, data.phone_no, data.path, data.type, userId];
												insertClient(query, param, function () {
													if (data.type === 'employee') {
														query = "update `bank_details` set `accountNo`=?, `ifscCode`=?, `panNo`=?,`adharNo`=?,`dateJoining`=?,`monthlySalary`=?,`department`=? where `user_id`=?";
														param = [data.accountNo, data.ifscCode, data.panNo, data.aadharNo, data.dateJoining, data.monthlySalary, data.department, userId];
														insertClient(query, param, function () {
															connection.commit();
															callback(true);
														});
													} else {
														connection.commit();
														callback(true);
													}
												});
											});
										} else {

										}
									})
								}
							})

						}

					} else {
						var arrLength = 0;
						familyData.forEach(function (value, index) {
							query = "insert into `family_details` (`name`,`relation`,`dob`,`working_status`,`comments`,`user_id`,`indexVal`) values(?,?,?,?,?,?,?)";
							param = [value[0], value[1], value[2], value[3], "", userId, index];
							arrLength++;
							insertClient(query, param, function () {
								if (arrLength === ress.length) {
									query = "update `occupation_details` set `type`=?, `company`=?, `designation`=? where `user_id`=?";
									param = [data.employment, data.company, data.designation, userId];
									insertClient(query, param, function () {
										query = "update `card_details` set `name`=?, `age`=?, `sex`=?,`phone`=?,`path`=? where `user_id`=?";
										param = [data.first_name + ' ' + data.last_name, data.user_age, data.gender, data.phone_no, data.path, data.type, userId];
										insertClient(query, param, function () {
											if (data.type === 'employee') {
												query = "update `bank_details` set `accountNo`=?, `ifscCode`=?, `panNo`=?,`adharNo`=?,`dateJoining`=?,`monthlySalary`=?,`department`=? where `user_id`=?";
												param = [data.accountNo, data.ifscCode, data.panNo, data.aadharNo, data.dateJoining, data.monthlySalary, data.department, userId];
												insertClient(query, param, function () {
													connection.commit();
													callback(true);
												});
											} else {
												connection.commit();
												callback(true);
											}
										});
									});
								} else {

								}
							});
						});
					}
				});
			});
		});
	});
}

var getTransactionId = function (data, callback) {
	if (data.transactionId == undefined || data.transactionId == '' || data.transactionId == null) {
		var query = "select max(transactionId) as transactionId from `accounts`"
		ndvduserdatabase.then(function (connection) {
			connection.query(query,
				function (err, res) {
					console.log(res)
					if (err) {
						connection.rollback();
						console.log(err);
					} else {
						if (res.length == 1 && res[0].transactionId === null) {
							var date = new Date();
							console.log(date.getFullYear())
							console.log(date);
							//console.log(res[0].transactionId)
							callback(date.getFullYear() + '' + doPadding(0, 4, 0));

						} else {
							var date = new Date();
							console.log(res[0].transactionId)
							if (!isNaN(parseInt(res[0].transactionId))) {
								callback(date.getFullYear() + '' + doPadding(parseInt((res[0].transactionId).toString().slice(-4)) + 1, 4, 0));
							} else {
								callback(date.getFullYear() + '' + doPadding(0, 4, 0));
							}
						}
					}
				});
		});
	} else {
		callback(data.transactionId);
	}
}

var getuserId = function (data, callback) {
	if (data.userId == undefined || data.userId == '' || data.userId == null) {
		var query = "select max(user_id) as userId from `personal_details`"
		ndvduserdatabase.then(function (connection) {
			connection.query(query,
				function (err, res) {
					if (err) {
						connection.rollback();
					} else {
						if (res.length == 0) {
							callback(date.getFullYear() + '' + doPadding(0, 4, 0));
						} else {
							var date = new Date();
							if (!isNaN(parseInt(res[0].userId))) {
								callback(date.getFullYear() + '' + doPadding(parseInt(res[0].userId.slice(-4)) + 1, 4, 0));
							} else {
								callback(date.getFullYear() + '' + doPadding(0, 4, 0));
							}
						}
					}
				});
		});
	} else {
		callback(data.userId);
	}
}

var doPadding = function (num, width, z) {
	z = z || '0';
	num = num + '';
	return num.length >= width ? num : new Array(width - num.length + 1).join(z) + num;
}

var insertClient = function (query, param, callback) {
	ndvduserdatabase.then(function (connection) {
		connection.query(query, param,
			function (err, res) {
				if (err) {
					connection.rollback();
					console.log(err);
				} else {
					callback();
				}
			});
	});
}

/*client.doSubscribe=function(data,callback){
	var query="INSERT INTO `subscribtion` (`user_id`, `activity_id`) VALUES (?, ?)";
	connection.query(query,
			[data.user_id,data.activity_id],function(err,res){
		if(err){
			console.log(err);
			callback(false);
		}else{
			callback(true,res)
		}
	});
}*/

client.doSubscribe = function (data, callback) {
	var query = "INSERT INTO `subscribtion` (`user_id`, `activity_id`,`counter`) VALUES (?, ?,?)";
	connectionMedia.query("Select counter from media_count where `activity_id`=?", [data.activity_id], function (err, res) {
		if (err) {
			callback(false);
		} else {
			var counter = 0;
			if (!(res.length == 0)) {
				counter = res[0].counter;
			}
			connectionMedia.query(query, [data.user_id, data.activity_id, counter], function (err, res) {
				if (err) {
					callback(false);
				} else {
					callback(true, res)
				}
			});
		}
	});
}

client.seenNotification = function (data, callback) {
	var query = "select counter,activity_id from `subscribtion` where `user_id`=?";
	connectionMedia.query("select counter,activity_id from `subscribtion` where `user_id`=?", [data.user_id], function (err, res) {
		if (err) {
			callback(false);
		} else {
			for (var i = 0; i < res.length; i++) {
				notifi(data.user_id, res[i].activity_id, res, callback);
			}
		}
	});
}

function notifi(user_id, activity_id, ress, callback) {
	var query = "update  `subscribtion` set `counter`=?  where `activity_id`=? and `user_id`=?";
	connectionMedia.query("select counter from `media_count` where `activity_id`=?", [activity_id], function (err, res) {
		if (err) {
			callback(false);
		} else {
			connectionMedia.query(query, [res[0].counter, activity_id, user_id], function (err, res) {
				if (err) {
					callback(false);
				} else {
					arrLength++;
					if (arrLength === ress.length) {
						callback(true, res)
					}
				}

			});
		}
	});
}


client.checkNotification = function (user_id, callback) {
	connectionMedia.query("select counter,activity_id from `subscribtion` where `user_id`=?", [user_id], function (err, res) {
		if (err) {
			callback(false);
		} else {
			arrLength = 0, arrayVal = [];
			for (var i = 0; i < res.length; i++) {
				setCounter(res[0].activity_id, user_id, i, res, callback)
			}
		}
	});
}



var setCounter = function (activity_id, user_id, iter, res, callback) {
	if (iter == res.length) {
		callback(true, ress);
	} else {
		var query = "select counter from `media_count` where `activity_id`=?";
		connectionMedia.query(query, [res[iter].activity_id, user_id], function (err, ress) {
			arrLength++;
			if (err) {
				callback(false);
			} else {
				if (ress.length > 0) {
					if (ress[0].counter !== res[iter].counter) {
						res[iter].counter = ress[0].counter - res[iter].counter;
						arrayVal.push(res[iter]);
					}
					if (arrLength === res.length - 1) {
						callback(true, arrayVal);
					}
				} else {
					if (arrLength === res.length - 1) {
						callback(true, arrayVal);
					}
				}
			}

		});
	}
}

exports.client = client;