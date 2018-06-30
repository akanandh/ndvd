/**
 * http://usejsdoc.org/
 */
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./properties.property');
var express = require('express');
var app = express();

var path = require('path');
var ejs = require('ejs')
var app2 = express();
var bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();
var thumb = require('node-thumbnail').thumb;
const fileUpload = require('express-fileupload');
var server = require('http').createServer(app);
var server2 = require('http').createServer(app2);
var client = require('./DBFiles/query.js').client;
var contentClient = require('./DBFiles/contentQuery.js').client
var port = 3000;
var serverName = process.env.NAME || 'Unknown';
var fs = require("fs");
const uuidv4 = require('uuid/v4');



//********************************passport***************************************

const Redis = require('ioredis');

const session = require('express-session');
const RedisStore = require('connect-redis')(session);


app.use(
    session({
        name: 'nvd',
        store: new RedisStore({
            client: new Redis(properties.get('dbs.redis'))
        }),
        secret: 'secret',
        saveUninitialized: false,
        resave: false,
        cookie: {
            secure: false
        }
    })
);
/*app.use((req,res,next)=>{
	if(req.originalUrl==properties.get('post-paths.app.post-media')||
	req.originalUrl==properties.get('post-paths.app.delete-gallery')||
	req.originalUrl==properties.get('post-paths.app.upload-gallery')){
		if(!!req.session.user){
			next();
		}else{
			res.send({"result":"not authorised"});
			next(1);
		}
	}
}); */

//******************************************For video****************************

http = require("http"),
    url = require("url"),
    path = require("path");


http.createServer(function(req, res) {

    if (req.url != "/movie.mp4") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end('<video src="http://localhost:8888/movie.mp4" controls></video>');
    } else {
        var file = path.resolve(__dirname, "a1.mp4");

        fs.stat(file, function(err, stats) {
            if (err) {
                if (err.code === 'ENOENT') {
                    // 404 Error if file not found
                    return res.sendStatus(404);
                }
                res.end(err);
            }
            var range = req.headers.range;
            if (!range) {
                // 416 Wrong range
                return res.sendStatus(416);
            }
            var positions = range.replace(/bytes=/, "").split("-");
            var start = parseInt(positions[0], 10);
            var total = stats.size;
            var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
            var chunksize = (end - start) + 1;

            res.writeHead(206, {
                "Content-Range": "bytes " + start + "-" + end + "/" + total,
                "Accept-Ranges": "bytes",
                "Content-Length": chunksize,
                "Content-Type": "video/mp4"
            });

            var stream = fs.createReadStream(file, {
                    start: start,
                    end: end
                })
                .on("open", function() {
                    stream.pipe(res);
                }).on("error", function(err) {
                    res.end(err);
                });
        });
    }
}).listen(8888);


//**************************************** For upload *******************************************


var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        console.log(req.route.path);
        if (req.route.path === properties.get('post-paths.app2.upload-dp-image')) {
            callback(null, properties.get('media-paths.media.dpimage'))
        } else if (req.route.path === properties.get('post-paths.app2.upload-gallery')) {
            //var path=properties.get('media-paths.media.galleryimage');
            callback(null, properties.get('media-paths.media.galleryimage'))
        } else {
            callback(null, properties.get('media-paths.media.other'))
        }

    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

server.listen(port, function() {
    console.log('Server listening at port %d', port);
    console.log('Hello, I\'m %s, how can I help?', serverName);
});

app.use(bodyParser.urlencoded({
    extended: false
}))

//parse application/json
app.use(bodyParser.json({
    limit: '500mb'
}))


// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app2.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(fileUpload({
    safeFileNames: /\\/g,
    preserveExtension: 4
}));
app.use(bodyParser.urlencoded({
    limit: '500mb',
    extended: true
}));

//Image server
server2.listen(4000, function() {
    console.log('Server listening at port %d', 4000);
    console.log('Hello, I\'m %s, how can I help?', serverName);
});

app2.set('view engine', 'ejs');
app2.use(bodyParser.json({
    limit: '500mb'
}))

app.use(express.static('public'));
app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/dist/index.html');
    });
//**********************required data***********************************************




function fieldArrayForupload(fieldNamesString) {
    var extensionArray = [];
    var fieldNames = fieldNamesString.split(',')
    var lengthextensionArray = fieldNames.length
    if (lengthextensionArray & 1) {
        server.close(function() {
            console.log('check property [media-paths.media.field-names]')
        });
        server2.close(function() {
            console.log('check property [media-paths.media.field-names]')
        })
    }

    for (var iter = 0; iter < lengthextensionArray; iter = iter + 2) {
        extensionArray.push({
            name: fieldNames[iter],
            maxCount: fieldNames[iter + 1]
        })
    }
    return extensionArray;
}



//***********************post methods***********************************



/*app.post(properties.get('post-paths.app.login'),function(req, res, next) {
    client.login(req.body.username, req.body.password, (err, user) => {
                    if (err) {
                       res.send('error');
                    }else if (!user) {
					res.send({'result':'fail'});
                    }else{
						req.session.regenerate(function (err) {
						req.session.user = user;
						res.send({'result':'success'});
						});

					}

                });
}); */


app.post(properties.get('post-paths.app.register'), function(req, res1) {
    client.register(req.body.userId, req.body.password, req.body.type, function(err, res) {
        var object = {
            error: true,
            res: "fail"
        }
        if (err) {
            res1.send(object)
        } else if (!res) {
            object.error = false;
            res1.send(object);
        } else if (res) {
            object.error = false;
            object.res = "success"
            res1.send(object);
        }
    });
});



app.post(properties.get('post-paths.app.validate-user'), function(req, res) {
    client.isUserValid(req.body.userId, function(bool) {
        res.send(bool);
    });
});


app.post(properties.get('post-paths.app.insert-user'), function(req, res) {
    client.insertUser(req.body, req.body.familyData, function(bool) {
        res.send(bool);
    });
});
app.post(properties.get('post-paths.app.update-user'), function(req, res) {
    client.updateUser(req.body, req.body.familyData,req.body.id, function(bool) {
        res.send(bool);
    });
});
app.post(properties.get('post-paths.app.select-user'), function(req, res) {
    client.slectUsers(req.body, function(value, data) {
        if (value) {
            res.send(data);
        } else {
            res.send({
                result: 'fail'
            })
        }

    });
});
app.post(properties.get('post-paths.app.get-user'), function(req, res) {
    client.getUserDetails(req.body, function(value, data) {
        if (value) {
            obj = {
                result: 'success',
                data: data
            };
        } else {
            obj = {
                result: 'fail'
            };
        }
        res.send(obj);
    });
});
app.post(properties.get('post-paths.app.delete-user'), function(req, res) {
    client.deleteUser(req.body, function(value) {
        if (value) {
            obj = {
                result: 'success'
            };
        } else {
            obj = {
                result: 'fail'
            };
        }
        res.send(obj);
    });
});
app.post(properties.get('post-paths.app.get-content-list'), function(req, res) {
    contentClient.getContentList(function(value, data) {
        if (value) {
            obj = {
                result: 'success',
                data: data
            };
        } else {
            obj = {
                result: 'fail'
            };
        }
        res.send(obj);
    });
});


app.post(properties.get('post-paths.app.login'), function(req, res) {
	console.log(req)
    client.login(req.body,function(data) {
        if (data) {
            obj = {
                result: 'success',
                data: data
            };
        } else {
            obj = {
                result: 'fail'
            };
        }
        res.send(obj);
    });
});


app2.post(properties.get('post-paths.app2.delete-dp'), function(req, res) {
    fs.unlink(req.body.path, function(err) {
        var obj = {};
        if (err) {
            console.log(err);
            obj = {
                result: 'fail'
            };
        } else {
            obj = {
                result: 'success'
            };
        }
        res.send(obj);

    })
});
app2.get('/*', function(req, res) {
    var filePath = path.join(__dirname, req.originalUrl);
    res.sendFile(filePath);
})
app2.post(properties.get('post-paths.app2.upload-dp-image'), function(req, res) {
    var upload = multer({
        storage: storage,
        fileFilter: function(req, file, callback) {
            var ext = path.extname(file.originalname)
            var extensionArray = properties.get('media-paths.media.extension').split(',');
            if (extensionArray.indexOf(ext) === -1) {
                return callback(res.end('Only images are allowed'), null)
            }
            callback(null, true)
        }
    }).fields(fieldArrayForupload(properties.get('media-paths.media.dp.field-names')));
    upload(req, res, function(err) {
        var objval = {};
        if (err) {
            console.log(err)
            res.send(objval)
        } else {
            objval.pathValue = req.files.image[0].path;
            res.send(objval);
        }
    })
});
app2.post(properties.get('post-paths.app2.upload-gallery'), function(req, res) {
    console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
    console.log(JSON.stringify(req.file));
    var upload = multer({
        storage: storage,
        fileFilter: function(req, file, callback) {
            var ext = path.extname(file.originalname)
            console.log(ext)
            console.log(JSON.stringify(callback));
            var extensionArray = properties.get('media-paths.media.extension').split(',');
            console.log(extensionArray)
            if (extensionArray.indexOf(ext) === -1) {
                return callback(res.end('Only images are allowed'), null)
            }
            callback(null, true)
        }
    }).fields(fieldArrayForupload(properties.get('media-paths.media.field-names')));
    console.log(properties.get('media-paths.media.field-names'))
    upload(req, res, function(err) {
        var objval = {};
        if (err) {
            console.log(err)
            res.send(objval)
        } else {
            console.log(req.files)
            objval.pathValue = req.files.file[0].path;
            res.send(objval);
        }
    })
});
app2.post(properties.get('post-paths.app2.delete-gallery'), function(req, res) {
    fs.unlink(req.body.path, function(err) {
        var obj = {};
        if (err) {
            console.log(err);
            obj = {
                result: 'fail'
            };
        } else {
            obj = {
                result: 'success'
            };
        }
        res.send(obj);

    })
});
app.post(properties.get('post-paths.app.get-degree'), function(req, res) {
		contentClient.getDegree({}, function(ress,value) {
                        if (ress) {
							res.send(value);
                        }else{
							res.send({'result':'fail'})
						}
})
})

app.post(properties.get('post-paths.app.get-college'), function(req, res) {
		contentClient.getCollege({}, function(ress,value) {
                        if (ress) {
							res.send(value);
                        }else{
							res.send({'result':'fail'})
						}
})
})

app.post(properties.get('post-paths.app.get-media-type'), function(req, res) {
	contentClient.getMediaType({}, function(ress,value) {
                        if (ress) {
							res.send(value);
                        }else{
							res.send({'result':'fail'})
						}
})
})
app.post(properties.get('post-paths.app.get-media-info'), function(req, res) {
	contentClient.getMediaInfo({}, function(ress,value) {
                        if (ress) {
							res.send(value);
                        }else{
							res.send({'result':'fail'})
						}
})
})

app.post(properties.get('post-paths.app.get-mp4-info'), function(req, res) {
	contentClient.getMp4Info({}, function(ress,value) {
                        if (ress) {
							res.send(value);
                        }else{
							res.send({'result':'fail'})
						}
})
})

app.post(properties.get('post-paths.app.post-media'), function (req, res) {
    var newPathList = [];
    var oldPathList = req.body.uploadList;
    var object = {
        result: 'fail'
    }
    console.log(oldPathList);
    req.body.ipAddress = req.connection.remoteAddress;
    contentClient.insertactivity(req.body, (err, responseInsert) => {
        if (err) {
            res.send({ 'result': 'fail' });
        } else {
            if (req.body.live) {
                var param = {};
                param.activity_id = req.body.event_name;
                param.media_url = req.body.link;
                param.thumbnail_url = null;
                param.type = 'live';
                param.media_id = 'live';
                param.posted_on = new Date(Date.now());
                contentClient.insertMediaContent(param, function (ress) {
                    if (ress) {
                        res.send({ 'result': "success" });
                    } else {
                        res.send({ 'result': 'fail' });
                    }
                });
            } else {
              
                var mkdirPath='.'+path.sep+ properties.get('media-paths.media.galleryimage').split(path.sesp).pop()+path.sep+req.body.event_type;
               
                fs.mkdir(mkdirPath, function (err) {
                    var obj = {};
                    if (err && err.code != 'EEXIST') {
                        console.log("mkdir***************************************")
                        console.log(err);
                        obj = {
                            result: 'fail'
                        };
                        res.send(obj);
                        //break;
                    } else {
                        var keyArray = Object.keys(oldPathList);
                        var lastKey = keyArray[keyArray.length - 1];
                        var insertCount = keyArray.length;
                        for (var keyOuter in oldPathList) {
                          //var oldPath =
                        // console.log('oldpath'+ ".\\" + oldPathList[keyOuter]);
                         var oldPath ='.'+path.sep+oldPathList[keyOuter];
                             var newPath='.'+path.sep+properties.get('media-paths.media.galleryimage').split(path.sep).pop() + path.sep + req.body.event_type + path.sep + oldPath.split(path.sep).pop();
                           // console.log('newpath'+ '.'+path.sep+properties.get('media-paths.media.galleryimage').split("/").pop() + path.sep + req.body.event_type + path.sep + oldPath.split("\\").pop());
                           // var newPath = ".\\" + "\\" + properties.get('media-paths.media.galleryimage').split("/").pop() + "\\" + req.body.event_type + "\\" + oldPath.split("\\").pop();

                            console.log('old'+oldPath);
                            console.log('new'+newPath);

                            move(oldPath, newPath, keyOuter, function (oldPath, newPath,key, err) {
								console.log('!!!!!!!!!!!!!!!!!!!1')
								console.log(newPath)
								console.log('2222222222222')
                                var obj = {};
                                if (err) {
                                    console.log("move***************************************")
                                    console.log(err);
                                    obj = {
                                        result: 'fail'
                                    };
                                    res.send(obj);
                                    return;
                                }
                                newPathList.push(newPath);
                                var param = {};
                                param.activity_id = req.body.event_name;
                                param.media_url = newPath;
                                param.thumbnail_url = null;
                                console.log('key'+key);
                                param.type = key.split(".").pop();
                                param.media_id = key;
                                param.posted_on = new Date(Date.now());
                                thumb({
                                    source: ".\\" + "\\" + properties.get('media-paths.media.galleryimage').split("/").pop() + "\\" + req.body.event_type, // could be a filename: dest/path/image.jpg
                                    destination: ".\\" + "\\" + properties.get('media-paths.media.galleryimage').split("/").pop() + "\\" + req.body.event_type,
                                    concurrency: 4
                                }, function (files, err, stdout, stderr) {
                                    console.log('All done!');
                                });
                                contentClient.insertMediaContent(param, function (ress) {
									console.log('aaaaaaaaaaaaaaa')
									console.log(param)
									console.log('bbbbbbbbbb')
                                    insertCount--;
                                    if (ress) {
                                        if (insertCount === 0) {
                                            res.send({ 'result': "success" });
                                        }
                                    } else {
                                        if (insertCount === 0) {
                                            res.send({ 'result': 'fail' });
                                        }
                                    }
                                });
                            });
                        }
                    }
                });
            }


        }

    })
});




app.post(properties.get('post-paths.app.check-notification'), function (req, res, next) {
    client.checkNotification(req.body.userId,function(bool, ress){
		 if (bool) {
			 console.log(ress);
			 console.log('yyyyyyyyyyyyyy')
            res.send({ 'result': "success",'value':ress });
        } else {
            res.send({ 'result': "fail" });
        }
	})

});

app.post(properties.get('post-paths.app.notification-seen'), function (req, res, next) {
    var data = req.body;
    data.user_id = req.body.userId;
    client.seenNotification(data, function (bool, ress) {
        if (bool) {
            res.send({ 'result': "success" });
        } else {
            res.send({ 'result': "fail" });
        }
    })

})

app.post(properties.get('post-paths.app.subscribe'), function (req, res, next) {
    var data = req.body;
    data.user_id = req.body.userId;
    console.log('subscribe',data.user_id);
    client.doSubscribe(data, function (bool, ress) {
        if (bool) {
            res.send({ 'result': "success" });
        } else {
            res.send({ 'result': "fail" });
        }
    })

});
app.post(properties.get('post-paths.app.select-transaction'), function (req, res) {
    var data = req.body;
   // data.user_id = req.session.userId;
    client.selectTransaction(data, function (bool,value) {
        if (bool) {
            res.send({ 'result': "success" ,value:value});
        } else {
            res.send({ 'result': "fail" });
        }
    })

});


app.post(properties.get('post-paths.app.update-transaction'), function (req, res) {
    var data = req.body;
   // data.user_id = req.session.userId;
    client.updateAccount(data, function (bool,value) {
        if (bool) {
            res.send({ 'result': "success" ,value:value});
        } else {
            res.send({ 'result': "fail" });
        }
    })

});

app.post(properties.get('post-paths.app.select-all'), function (req, res) {
    var data = req.body;
   // data.user_id = req.session.userId;
    client.selectAll(data, function (bool,value) {
        if (bool) {
			console.log(value);
            res.send({ 'result': "success" ,value:value});
        } else {
            res.send({ 'result': "fail" });
        }
    })

});

app.post(properties.get('post-paths.app.insert-account'), function (req, res) {
    var data = req.body;
   // data.user_id = req.session.userId;
    client.insertAccount(data, function (bool) {
        if (bool) {
            res.send({ 'result': "success" });
        } else {
            res.send({ 'result': "fail" });
        }
    })

});

function move(oldPath, newPath, key, callback) {
console.log('!!!!!!!**************!!!!1')
								console.log(newPath)
								console.log('2222222222222')
								var oldPath1=oldPath;
								var newPath1=newPath;
    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
				callback(key,err);
            } else {
				console.log(oldPath1+'aaaaaaaaaa')
                callback(key, err);
            }
            return;
        }
        callback(oldPath, newPath,key);
    });

    function copy() {
        var readStream = fs.createReadStream(oldPath);
        var writeStream = fs.createWriteStream(newPath);

        readStream.on('error', callback);
        writeStream.on('error', callback);

        readStream.on('close', function () {
            fs.unlink(oldPath, callback);
        });

        readStream.pipe(writeStream);
    }
}

function removemedia() {

    contentClient.remove(fs, (err, res) => {
        if (res) {
            console.log('peiodic remove executed');
        } else {
            console.log('error');
        }

    });
}